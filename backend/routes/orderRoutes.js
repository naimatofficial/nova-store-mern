import express from "express";
const router = express.Router();
import {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getOrders,
} from "../controllers/orderController.js";
import { protect, restrictTo } from "../controllers/authController.js";
import { restrictTo } from "../controllers/authController.js";

router
	.route("/")
	.post(protect, addOrderItems)
	.get(protect, restrictTo("admin"), getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router
	.route("/:id/deliver")
	.put(protect, restrictTo("admin"), updateOrderToDelivered);

export default router;
