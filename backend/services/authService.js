import User from "../models/User";
import { sign } from "jsonwebtoken";
import {
	secret,
	refreshSecret,
	accessTokenExpiresIn,
	refreshTokenExpiresIn,
} from "../config/jwtConfig";
import { setRefreshToken } from "./redisService";

function generateAccessToken(user) {
	return sign({ userId: user._id }, secret, {
		expiresIn: accessTokenExpiresIn,
	});
}

function generateRefreshToken(user) {
	const refreshToken = sign({ userId: user._id }, refreshSecret, {
		expiresIn: refreshTokenExpiresIn,
	});
	setRefreshToken(user._id, refreshToken);
	return refreshToken;
}

async function login(email, password) {
	// Implement your login logic (e.g., validating credentials, fetching user from MongoDB)
	const user = await User.findOne({ email });
	if (!user) return null;

	// Check if the password is valid, then generate tokens
	const isValidPassword = await user.isValidPassword(password);
	if (isValidPassword) {
		const accessToken = generateAccessToken(user);
		const refreshToken = generateRefreshToken(user);
		return { accessToken, refreshToken };
	}
	return null;
}

export default { login };
