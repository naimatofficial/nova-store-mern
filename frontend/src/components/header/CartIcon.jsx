import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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
		<Tooltip
			content="Cart"
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0, y: 25 },
			}}
			className="bg-gray-300 text-black"
		>
			<Link to="/cart">
				<IconButton aria-label="cart">
					<StyledBadge badgeContent={totalItems} color="error">
						<ShoppingCartIcon className="text-blue-500" fontSize="large" />
					</StyledBadge>
				</IconButton>
			</Link>
		</Tooltip>
	);
}
