import { Alert, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const RecentlyViewedProducts = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});
	const recentlyViewed = useSelector((state) => state.recentlyViewed);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		if (data && data.doc) {
			// Step 1: Filter products based on recently viewed IDs
			const filtered = data.doc.filter((product) => {
				return recentlyViewed.some(
					(viewedItem) => viewedItem.id === product._id
				);
			});

			// Step 2: Sort the filtered products by timestamp in descending order
			filtered.sort((a, b) => {
				// Convert timestamps to date objects using Date.parse()
				const dateA = Date.parse(a.timestamp || "1970-01-01T00:00:00"); // Provide a default date if timestamp is missing
				const dateB = Date.parse(b.timestamp || "1970-01-01T00:00:00");

				return dateB - dateA; // Sort in descending order
			});

			setFilteredProducts(filtered);
		}
	}, [data, recentlyViewed]);

	if (isLoading) {
		return <Loader />;
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}

	return (
		<div className="p-5 mt-5">
			<Typography variant="h4">Recently Viewed Products</Typography>
			{filteredProducts && filteredProducts.length > 0 && (
				<ProductList products={filteredProducts} />
			)}
		</div>
	);
};

export default RecentlyViewedProducts;
