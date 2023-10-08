import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CartSummary = () => {
	const cart = useSelector((state) => state.cart);

	// Calculate shipping, tax, and total prices
	const shippingPrice = cart?.shippingPrice; // Change this according to your requirements
	const taxPrice = cart?.taxPrice; // Change this according to your requirements

	const taxRate = cart?.taxRate;
	const subtotal = cart.itemsPrice;

	const totalItems = cart?.cartItems?.reduce((acc, item) => acc + item.qty, 0);
	const totalPrice = cart?.totalPrice;

	return (
		<div className="w-1/3 p-5  rounded-lg bg-white text-lg ">
			<h1 className="text-2xl font-semibold">Cart Summary</h1>
			<div className="mt-4">
				<div className="flex justify-between mb-1">
					<p>Total Items:</p>
					<p className="font-medium">{totalItems}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p>Subtotal:</p>
					<p className="font-medium">${subtotal}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p>Shipping:</p>
					<p className="font-medium">
						{shippingPrice > 0 ? (
							<span>${shippingPrice}</span>
						) : (
							<span className="text-green-800">Free</span>
						)}
					</p>
				</div>
				<div className="flex justify-between mb-1">
					<p>Tax ({taxRate * 100}%):</p>
					<p className="font-medium">${taxPrice}</p>
				</div>
				<hr className="my-2" />
				<div className="flex justify-between mb-1">
					<p>Total Price:</p>
					<p className="font-medium">${totalPrice}</p>
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
