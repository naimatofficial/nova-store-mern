import React from "react";
import CartList from "../components/cart/CartList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

import CartSummary from "../components/cart/CartSummary";

const CartScreen = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<>
			{cartItems && cartItems.length > 0 ? (
				<div className="w-11/12 px-4 py-2 mx-auto flex justify-between gap-4">
					<CartList items={cartItems} />
					<CartSummary />
				</div>
			) : (
				<>
					<Typography variant="h3">Your Cart is empty!</Typography>
					<Link to="/">
						<Button variant="filled" className="rounded-full">
							Go to Shopping
						</Button>
					</Link>
				</>
			)}
		</>
	);
};

export default CartScreen;
