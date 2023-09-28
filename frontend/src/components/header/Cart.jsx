import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(() => ({
	"& .MuiBadge-badge": {
		right: 10,
		top: -3,
		padding: "0 4px",
		border: "none",
		fontSize: "14px",
	},
}));

export default function Cart() {
	return (
		<IconButton aria-label="cart">
			<StyledBadge badgeContent={4} color="error">
				<ShoppingCartIcon className="text-blue-500" fontSize="large" />
			</StyledBadge>
		</IconButton>
	);
}
