import React from "react";
import CartList from "../components/cart/CartList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

import CartSummary from "../components/cart/CartSummary";

const CartScreen = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<div className="p-4 mx-4">
			{cartItems && cartItems.length > 0 ? (
				<>
					<Typography
						variant="h2"
						className="text-xlg broder bottom-1 w-full mb-3"
					>
						Shopping Cart
					</Typography>
					<div className="w-11/12 px-4 py-2 mx-auto flex justify-between gap-4">
						<CartList items={cartItems} />
						<CartSummary />
					</div>
				</>
			) : (
				<div className="text-center p-5 flex flex-col gap-10 items-center justify-center h-96">
					<Typography variant="h3">Your Cart is empty!</Typography>
					<Link to="/">
						<Button variant="filled" className="rounded-full text-lg">
							Go to Shopping
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default CartScreen;
