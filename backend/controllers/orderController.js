import Order from "../models/OrderModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createOrder = createOne(Order);
export const getOrders = getAll(Order);
export const getOrder = getOne(Order);
export const deleteOrder = deleteOne(Order);
export const updateOrder = updateOne(Order);
