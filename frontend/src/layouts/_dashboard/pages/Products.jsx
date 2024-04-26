import React from "react";
import { useGetProductsQuery } from "../../../redux/slices/productsApiSlice";
import Loader from "../../../components/Loader";
import ProductsTable from "../_components/ProductsTable";

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
			<h1 className="text-4xl text-yellow-900 font-bold ml-6">All Products</h1>
			<ProductsTable data={products?.doc} />
		</div>
	);
};

export default Products;
