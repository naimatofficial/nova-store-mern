import express from "express";
const router = express.Router();
import {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	createProductReview,
	getTopProducts,
} from "../controllers/productController.js";
import checkObjectId from "../middleware/checkObjectId.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import upload from "./../middleware/upload.js";

router
	.route("/")
	.get(getProducts)
	.post(protect, restrictTo("admin"), upload.single("image"), createProduct);

router.route("/:id/reviews").post(protect, checkObjectId, createProductReview);

router.get("/top", getTopProducts);
router
	.route("/:id")
	.get(checkObjectId, getProduct)
	.put(protect, restrictTo("admin"), checkObjectId, updateProduct)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteProduct);

export default router;
