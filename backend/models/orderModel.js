import { Schema, model } from "mongoose";

const orderSchema = new Schema(
	{
		customerName: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product",
			},
		],
		totalAmount: {
			type: Number,
			required: true,
		},
		paymentMethod: {
			type: String,
			enum: ["COD"], // Only 'COD' payment method allowed
			default: "COD",
		},
	},
	{
		timestamps: true,
	}
);

const Order = model("Order", orderSchema);

export default Order;
