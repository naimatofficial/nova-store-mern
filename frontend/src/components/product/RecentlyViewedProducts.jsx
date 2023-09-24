import { Alert, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const RecentlyViewedProducts = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});
	const recentlyViewed = useSelector((state) => state.recentlyViewed);

	// const filteredProducts = []
	// useEffect(() => {
	//   recentlyViewed.map()
	// }, []);

	if (isLoading) {
		return <Loader />;
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}
	console.log("recent products", recentlyViewed);

	let filteredProducts;
	if (data && data.doc) {
		// Step 1: Filter products based on recently viewed IDs
		filteredProducts = data.doc.filter((product) => {
			return recentlyViewed.some((viewedItem) => viewedItem.id === product._id);
		});

		// Step 2: Sort the filtered products by timestamp in descending order
		filteredProducts.sort((a, b) => b.timestamp - a.timestamp);
	}

	console.log(filteredProducts);
	return (
		<div>
			<Typography variant="h3">Recently Viewed Products</Typography>
			{filteredProducts && filteredProducts.length > 0 && (
				<ProductList products={filteredProducts} />
			)}
		</div>
	);
};

export default RecentlyViewedProducts;
