import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env.local" });

import connectDB from "./config/db.js";
import globalErrorHandler from "./controllers/errorController.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import AppError from "./utils/appError.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());

// Developing logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
	res.send("API is running....");
});

// Unhandle Routes Handling Middleware
app.all("*", (req, res, next) => {
	// AppError(message, statusCode)
	next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
