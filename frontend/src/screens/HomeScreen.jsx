import React from "react";
import { Alert } from "@material-tailwind/react";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";
import ProductList from "../components/product/ProductList";
import Loader from "../components/Loader";
import RecentlyViewedProducts from "../components/product/RecentlyViewedProducts";

const HomeScreen = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});

	if (isLoading) {
		return <Loader />;
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}

	if (data && Array.isArray(data.doc) && data.doc.length > 0) {
		console.log(data.doc);
		return (
			<div>
				<ProductList products={data.doc} />
				<RecentlyViewedProducts />
			</div>
		);
	} else {
		return <p>Products not found!</p>;
	}
};

export default HomeScreen;
