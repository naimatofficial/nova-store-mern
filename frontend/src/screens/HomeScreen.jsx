import React from "react";
import { Alert, Typography } from "@material-tailwind/react";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";
import ProductList from "../components/product/ProductList";
import Loader from "../components/Loader";
import RecentlyViewedProducts from "../components/product/RecentlyViewedProducts";
import { useSelector } from "react-redux";

const HomeScreen = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});
	const recentlyViewed = useSelector((state) => state.recentlyViewed);

	if (isLoading) {
		return <Loader />;
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}

	if (data && Array.isArray(data.doc) && data.doc.length > 0) {
		console.log(data.doc);
		return (
			<div className="p-5 mt-5">
				<Typography variant="h4">Popular products</Typography>
				<ProductList products={data.doc} />
				{recentlyViewed.length > 0 && <RecentlyViewedProducts />}
			</div>
		);
	} else {
		return <p>Products not found!</p>;
	}
};

export default HomeScreen;
