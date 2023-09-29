import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
	createProductReview,
	getTopProducts,
} from "../controllers/productController.js";
import checkObjectId from "../middleware/checkObjectId.js";
import restrictTo from "./../middleware/restrict";
import protect from "../middleware/protect.js";

router
	.route("/")
	.get(getProducts)
	.post(protect, restrictTo("admin"), createProduct);

router.route("/:id/reviews").post(protect, checkObjectId, createProductReview);

router.get("/top", getTopProducts);
router
	.route("/:id")
	.get(checkObjectId, getProductById)
	.put(protect, restrictTo("admin"), checkObjectId, updateProduct)
	.delete(protect, restrictTo("admin"), checkObjectId, deleteProduct);

export default router;
