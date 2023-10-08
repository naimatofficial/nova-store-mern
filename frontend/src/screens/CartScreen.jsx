import React from "react";
import CartList from "../components/cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import {
	addToCart,
	clearCartItems,
	removeFromCart,
} from "../redux/slices/cartSlice";

const CartScreen = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const dispatch = useDispatch();

	const clearCartHandler = () => {
		console.log("clear cart");
		dispatch(clearCartItems());
	};

	return (
		<>
			{cartItems && cartItems.length > 0 ? (
				<div className="w-3/5 px-4 py-2 mx-auto flex gap-4">
					<CartList items={cartItems} />
					{/* <CartSummary /> */}
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
