import Redis from "redis";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const redisClient = Redis.createClient({ url: "redis://127.0.0.1:6379" });

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient.connect();

console.log("Redis cache database connected...");

export default redisClient;
