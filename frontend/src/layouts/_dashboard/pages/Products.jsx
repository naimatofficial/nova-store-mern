import React from "react";
import { useGetProductsQuery } from "../../../redux/slices/productsApiSlice";
import Loader from "../../../components/Loader";
import TableView from "../../../components/TableView";

const Products = () => {
	const { data: products, isLoading, isError, error } = useGetProductsQuery({});

	if (isLoading) {
		return <Loader />;
	}

	if (isError && error && error?.data) {
		return (
			<div>
				<h1>Error: {error?.data?.message}</h1>
			</div>
		);
	}

	return (
		<div>
			<TableView data={products?.doc} />
		</div>
	);
};

export default Products;
