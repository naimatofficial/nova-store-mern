import React from "react";
import { Alert, Typography } from "@material-tailwind/react";
import Loader from "../../../components/Loader";
import { useGetProductsQuery } from "../../../redux/slices/productsApiSlice";
import ProductList from "../../../components/product/ProductList";

const HomeScreen = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});

	if (isLoading) {
		return <Loader />;
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}

	if (data && Array.isArray(data.doc) && data.doc.length > 0) {
		return (
			<div className="p-5 mt-5">
				<Typography variant="h4">Popular products</Typography>
				<ProductList products={data.doc} />
				{/* <ProductCarousel /> */}
			</div>
		);
	} else {
		return <p>Products not found!</p>;
	}
};

export default HomeScreen;
