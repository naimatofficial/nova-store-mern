import React from "react";
import CartList from "../components/cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

const CartScreen = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const dispatch = useDispatch();

	const addToCartHandler = (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
		console.log("add to cart" + product + qty);
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
		console.log("remove: " + id);
	};

	return (
		<>
			{cartItems && cartItems.length > 0 ? (
				<CartList
					items={cartItems}
					addToCart={addToCartHandler}
					removeToCart={removeFromCartHandler}
				/>
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
