import redisClient from "../config/redisConfig.js";

export function setRefreshToken(userId, refreshToken) {
	redisClient.setEx(`refreshToken:${userId}`, 30 * 24 * 60 * 60, refreshToken);
}

export function getRefreshToken(userId) {
	return new Promise((resolve, reject) => {
		redisClient.get(`refreshToken:${userId}`, (err, refreshToken) => {
			if (err) reject(err);
			resolve(refreshToken);
		});
	});
}
