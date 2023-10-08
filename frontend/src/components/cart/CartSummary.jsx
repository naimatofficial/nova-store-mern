import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CartSummary = () => {
	const { cartItems } = useSelector((state) => state.cart);

	// Calculate shipping, tax, and total prices
	const shippingPrice = 5; // Change this according to your requirements
	const taxRate = 0.06; // Change this according to your requirements

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.qty * item.price,
		0
	);

	const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
	const taxPrice = subtotal * taxRate;
	const totalPrice = subtotal + shippingPrice + taxPrice;

	return (
		<div className="w-1/3 p-5  rounded-lg bg-white text-lg ">
			<h1 className="text-2xl font-semibold">Order Summary</h1>
			<div className="mt-4">
				<div className="flex justify-between mb-1">
					<p>Total Items:</p>
					<p className="font-medium">{totalItems}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p>Subtotal:</p>
					<p className="font-medium">${subtotal.toFixed(2)}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p>Shipping:</p>
					<p className="font-medium">${shippingPrice.toFixed(2)}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p>Tax ({(taxRate * 100).toFixed(2)}%):</p>
					<p className="font-medium">${taxPrice.toFixed(2)}</p>
				</div>
				<hr className="my-2" />
				<div className="flex justify-between mb-1">
					<p>Total:</p>
					<p className="font-medium">${totalPrice.toFixed(2)}</p>
				</div>
			</div>
			<Button
				variant="filled"
				className="mt-4 bg-blue-500 text-white rounded-full w-full text-lg"
			>
				Proceed to Checkout
			</Button>
			<Link to="/">
				<Button
					variant="filled"
					className="mt-4 bg-orange-800 text-white rounded-full w-full text-lg"
				>
					Continue Shopping
				</Button>
			</Link>
		</div>
	);
};

export default CartSummary;
