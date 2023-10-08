import React from "react";
import CartItem from "./CartItem";

const CartList = ({ items, addToCart, removeFromCart }) => {
	return (
		<div className="flex flex-col gap-3">
			{items.map((item) => (
				<>
					<CartItem
						item={item}
						addToCart={addToCart}
						removeFromCart={removeFromCart}
					/>
				</>
			))}
		</div>
	);
};

export default CartList;
