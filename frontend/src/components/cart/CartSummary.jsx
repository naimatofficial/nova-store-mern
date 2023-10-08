import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
	const { cartItems } = useSelector((state) => state.cart);

	// Calculate shipping, tax, and total prices
	const shippingPrice = 5; // Change this according to your requirements
	const taxRate = 0.08; // Change this according to your requirements

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.qty * item.price,
		0
	);
	const taxPrice = subtotal * taxRate;
	const totalPrice = subtotal + shippingPrice + taxPrice;

	return (
		<div className="w-1/3 p-4 border border-gray-200 rounded-lg">
			<h1 className="text-2xl font-semibold">Order Summary</h1>
			<div className="mt-4">
				<div className="flex justify-between">
					<p>Subtotal:</p>
					<p>${subtotal.toFixed(2)}</p>
				</div>
				<div className="flex justify-between">
					<p>Shipping:</p>
					<p>${shippingPrice.toFixed(2)}</p>
				</div>
				<div className="flex justify-between">
					<p>Tax ({(taxRate * 100).toFixed(2)}%):</p>
					<p>${taxPrice.toFixed(2)}</p>
				</div>
				<hr className="my-2" />
				<div className="flex justify-between">
					<p>Total:</p>
					<p>${totalPrice.toFixed(2)}</p>
				</div>
			</div>
			<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
				Checkout
			</button>
		</div>
	);
};

export default CartSummary;
