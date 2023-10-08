import React from "react";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
	return (
		<div className="flex flex-col gap-3">
			{items.map((item) => (
				<>
					<CartItem item={item} />
				</>
			))}
		</div>
	);
};

export default CartList;
