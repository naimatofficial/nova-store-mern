import React from "react";
import ProductCard from "./ProductCard";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductList = ({ products }) => {
	const dispatch = useDispatch();

	const addToCartHandler = (product, qty) => {
		dispatch(addToCart({ ...product, qty }));
	};
	return (
		<div className="flex flex-wrap mx-auto justify-center items-center gap-4 mt-4 p-4 w-3/4">
			{products.map((product) => (
				<ProductCard
					key={product._id}
					product={product}
					addToCart={addToCartHandler}
				/>
			))}
		</div>
	);
};

export default ProductList;
