import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(() => ({
	"& .MuiBadge-badge": {
		right: 10,
		top: -3,
		padding: "0 4px",
		border: "none",
		fontSize: "14px",
	},
}));

export default function CartIcon() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		if (cartItems && cartItems.length > 0) {
			setTotalItems(cartItems.length);
		}
	}, [cartItems]);

	return (
		<IconButton aria-label="cart">
			<StyledBadge badgeContent={totalItems} color="error">
				<ShoppingCartIcon className="text-blue-500" fontSize="large" />
			</StyledBadge>
		</IconButton>
	);
}
