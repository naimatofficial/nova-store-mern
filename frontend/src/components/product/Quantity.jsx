import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = (props) => {
	const { quantity, increaseQuantity, decreaseQuantity } = props;

	return (
		<div className="flex items-center">
			<button
				onClick={decreaseQuantity}
				className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
			>
				<FaMinus />
			</button>
			<input
				type="number"
				value={quantity}
				readOnly
				className="w-16 p-2 text-center border border-gray-300 rounded-md mx-2 focus:outline-none"
			/>
			<button
				onClick={increaseQuantity}
				className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
			>
				<FaPlus />
			</button>
		</div>
	);
};

export default Quantity;
