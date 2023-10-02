import jwt from "jsonwebtoken";
import { setRefreshToken } from "./redisService.js";
import {
	accessTokenExpiresIn,
	refreshSecret,
	refreshTokenExpiresIn,
	secret,
} from "../config/jwtConfig.js";

function generateAccessToken(userId) {
	return jwt.sign({ userId }, secret, {
		expiresIn: accessTokenExpiresIn,
	});
}

function generateRefreshToken(userId) {
	const refreshToken = jwt.sign({ userId }, refreshSecret, {
		expiresIn: refreshTokenExpiresIn,
	});
	setRefreshToken(userId, refreshToken);
	return refreshToken;
}

export async function loginService(user) {
	const accessToken = generateAccessToken(user._id);
	const refreshToken = generateRefreshToken(user._id);

	return { accessToken, refreshToken };
}
