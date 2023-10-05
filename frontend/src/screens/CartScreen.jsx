import React from "react";
import CartList from "../components/cart/CartList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

const CartScreen = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	return (
		<>
			{cartItems && cartItems.length > 0 ? (
				<CartList items={cartItems} />
			) : (
				<>
					<Typography variant="h3">Your Cart is empty!</Typography>
					<Link to="/">
						<Button variant="default" className="rounded-full">
							Go to Shopping
						</Button>
					</Link>
				</>
			)}
		</>
	);
};

export default CartScreen;
