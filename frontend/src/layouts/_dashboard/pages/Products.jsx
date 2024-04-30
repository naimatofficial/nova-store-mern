import React from "react";
import { useGetProductsQuery } from "../../../redux/slices/productsApiSlice";
import Loader from "../../../components/Loader";
import ProductsTable from "../_components/ProductsTable";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
	const {
		data: products,
		isLoading,
		isError,
		error,
		refetch,
	} = useGetProductsQuery({});

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
			<div className="flex justify-between items-center">
				<h1 className="text-4xl text-yellow-900 font-bold ml-6">
					All Products
				</h1>
				<Link
					to="/dashboard/create-product"
					className="btn primary-btn flex items-center justify-center gap-2"
				>
					<FaPlus className="h-5 w-5" />
					Add Product
				</Link>
			</div>
			<ProductsTable data={products?.doc} refetch={refetch} />
		</div>
	);
};

export default Products;
