import express from "express";
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "./../controllers/userController.js";
import {
	login,
	protect,
	restrictTo,
	signup,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/sign-up", signup);

router.route("/").post(protect, restrictTo("admin"), createUser).get(getUsers);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
