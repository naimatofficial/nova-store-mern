import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Alert, Button, Rating, Typography } from "@material-tailwind/react";

import Loader from "../Loader";
import ProductList from "./ProductList";

import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import { addViewedProduct } from "../../redux/slices/recentlyViewedSlice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ product }) => {
	const { data, isLoading, error } = useGetProductsQuery({
		category: product.category,
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (product) {
			dispatch(addViewedProduct(product._id));
		}
	}, [dispatch, product]);

	let filteredProducts;
	if (data && data.doc && product._id) {
		filteredProducts = data.doc.filter((p) => p._id !== product._id) || [];
	}

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Alert color="red">{error}</Alert>;
	}

	const productRating = (Math.round(product.rating * 10) / 10).toFixed(1);

	return (
		<>
			<div className="text-left p-4 mt-3 ml-5">
				<Link
					to="/"
					className="hover:underline text-gray-900 hover:text-blue-700 text-lg flex items-center gap-1"
				>
					<FaArrowLeft />
					<span>Go back</span>
				</Link>
			</div>
			<div className="flex flex-wrap justify-between items-start gap-5 w-4/5 p-4 mt-4 mb-5 mx-auto">
				<div>
					<img
						className=" h-2/4 w-full rounded-lg object-cover object-center"
						src={product.image}
						alt={product.name}
					/>
				</div>
				<div className="flex flex-col justify-start gap-3 lg:w-2/5 md:w-full text-left">
					<Typography variant="h3">{product.name}</Typography>
					<div className="flex items-center gap-2">
						<span className="font-medium">{productRating}</span>
						<Rating value={Math.round(product.rating)} readonly />
						<span className="text-blue-800 font-medium">
							{product.numReviews} ratings
						</span>
					</div>
					<Typography variant="paragraph">{product.description}</Typography>
					<Typography variant="paragraph">
						<span className="text-gray-700 mr-2">Brand:</span>
						<span>{product.brand}</span>
					</Typography>
					<Typography variant="paragraph">
						<span className="text-gray-700 mr-2">Category:</span>
						<span>{product.category}</span>
					</Typography>
					<Typography variant="paragraph">
						<span className="text-gray-700 mr-2">Price:</span>
						<span className="font-bold text-lg">${product.price}</span>
					</Typography>
					{product.countInStock > 0 ? (
						<Typography
							variant="paragraph"
							className="font-bold text-green-700 text-lg"
						>
							In Stock
						</Typography>
					) : (
						<Typography
							variant="paragraph"
							className="font-bold text-deep-orange-700 text-lg"
						>
							Out Stock
						</Typography>
					)}
					<Typography className="font-bold text-lg text-blue-500">
						Free Shipping
					</Typography>

					<Button className="bg-orange-500 text-gray-900 text-lg">
						Add to Cart
					</Button>
				</div>
			</div>

			{filteredProducts.length > 0 && (
				<div className=" w-full mx-auto p-4 mt-3">
					<Typography variant="h4" className="font-bold text-center">
						Related Products
					</Typography>
					{filteredProducts && <ProductList products={filteredProducts} />}
				</div>
			)}
		</>
	);
};

export default ProductDetails;
