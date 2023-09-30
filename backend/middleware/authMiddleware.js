import User from "./../models/userModel.js";

import { promisify } from "util";
import AppError from "./../utils/appError.js";
import catchAsync from "./../utils/catchAsync.js";

export const protect = catchAsync(async (req, res, next) => {
	// 1) Getting token and check of it's there
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		return next(
			new AppError("You are not logged in! Please log in to get access.", 401)
		);
	}

	// 2) Verification token
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

	// 3) Check if user still exists
	const currentUser = await User.findById(decoded.id);

	if (!currentUser) {
		return next(
			new AppError(
				"The token belonging to this user does no longer exist.",
				401
			)
		);
	}

	// 4) Check if user changed password after the token was issued (iat: issued at)
	if (currentUser.changePasswordAfter(decoded.iat)) {
		return next(
			new AppError("User recently changed password! Please log in again.", 401)
		);
	}

	// GRANT ACCESS TO PROTECTED ROUTE
	req.user = currentUser;
	next();
});

// restrictTo is a Wrapper function to return the middleware function
export const restrictTo = (...roles) => {
	return (req, res, next) => {
		// roles is array: ['admin']
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError("You do not have permission to perform this action.", 403)
			); // 403: Forbiden
		}

		next();
	};
};
