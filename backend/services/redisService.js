import redisClient from "../config/redisConfig";

export default function setRefreshToken(userId, refreshToken) {
	redisClient.setex(`refreshToken:${userId}`, 30 * 24 * 60 * 60, refreshToken);
}

export default function getRefreshToken(userId) {
	return new Promise((resolve, reject) => {
		redisClient.get(`refreshToken:${userId}`, (err, refreshToken) => {
			if (err) reject(err);
			resolve(refreshToken);
		});
	});
}

