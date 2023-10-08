import React from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
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
		<div>
			<div className="w-3/5 flex flex-row item-center">
				<div className="h-14">
					<img
						src={item.image}
						alt="card-img"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="p-4 border border-gray-200 mb-4 rounded-lg">
					<div className="flex justify-between items-center">
						<div>
							<Link
								to={`/product/${item._id}`}
								className="hover:cursor-pointer hover:text-gray-600"
							>
								<h2 className="font-medium text-lg">{item.name}</h2>
							</Link>
							<p className="text-sm text-gray-500">Price: ${item.price}</p>
						</div>
						<button
							onClick={() => removeFromCartHandler(item._id)}
							className="text-red-500 hover:text-red-600"
						>
							Remove
						</button>
					</div>
					<div className="flex items-center space-x-2">
						<label htmlFor="quantity" className="text-sm font-semibold">
							Qty:
						</label>
						<select
							id="quantity"
							value={item.qty}
							onChange={(e) => addToCartHandler(item, Number(e.target.value))}
							className="border border-gray-300 rounded-full focus:outline-none py-1 px-2 text-sm"
						>
							{[...Array(item.countInStock).keys()].map((x) => (
								<option key={x + 1} value={x + 1}>
									{x + 1}
								</option>
							))}
						</select>
					</div>
					<p className="mt-4 text-lg font-medium">
						Total: ${item.qty * item.price}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
