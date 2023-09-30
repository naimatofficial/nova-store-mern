import { createClient } from "redis";

const redisClient = createClient({
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	// Add other configuration options here if needed
});

export default redisClient;
