import React from "react";
import { Alert, Spinner } from "@material-tailwind/react";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";
import ProductList from "../components/product/ProductList";

const HomeScreen = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});

	if (isLoading) {
		return (
			<Spinner
				className="h-screen w-24 mx-auto mt-5 p-5 flex place-content-center"
				color="blue"
			/>
		);
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}

	if (data && Array.isArray(data.doc) && data.doc.length > 0) {
		return (
			<div>
				<ProductList products={data.doc} />
			</div>
		);
	} else {
		return <p>Products not found!</p>;
	}
};

export default HomeScreen;
