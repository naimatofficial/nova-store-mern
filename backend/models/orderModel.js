import { Schema, model } from "mongoose";

const orderSchema = new Schema(
	{
		customerId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		postalCode: {
			type: Number,
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
			enum: ["COD"],
			default: "COD",
		},
	},
	{
		timestamps: true,
	}
);

const Order = model("Order", orderSchema);

export default Order;
