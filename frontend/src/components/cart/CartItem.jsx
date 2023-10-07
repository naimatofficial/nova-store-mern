import { CardBody, CardHeader, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, addToCart, removeFromCart }) => {
	return (
		<div>
			<div className="w-3/5 flex flex-row item-center">
				<CardHeader shadow={false} floated={false} className="h-14">
					<img
						src={item.image}
						alt="card-img"
						className="h-full w-full object-cover"
					/>
				</CardHeader>
				<CardBody className="p-4 flex items-center justify-between">
					<div>
						<Link
							to={`/product/${item._id}`}
							className="hover:cursor-pointer hover:text-gray-600"
						>
							<Typography color="blue-gray" className="font-medium">
								{item.name}
							</Typography>
						</Link>
					</div>
					<div>
						<Typography color="blue-gray" className="font-medium text-blue-400">
							${item.price}
						</Typography>
					</div>
					<div className="flex items-center space-x-2">
						<label htmlFor="quantity" className="text-sm font-semibold">
							Qty:
						</label>
						<select
							id="quantity"
							value={item.qty}
							onChange={(e) => addToCart(item, Number(e.target.value))}
							className="border border-gray-300 rounded-full focus:outline-none py-1 px-2 text-sm"
						>
							{[...Array(item.countInStock).keys()].map((x) => (
								<option key={x + 1} value={x + 1}>
									{x + 1}
								</option>
							))}
						</select>
					</div>
				</CardBody>
			</div>
		</div>
	);
};

export default CartItem;
