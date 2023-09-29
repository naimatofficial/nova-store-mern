// restrictTo is a Wrapper function to return the middleware function
const restrictTo = (...roles) => {
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

export default restrictTo;
