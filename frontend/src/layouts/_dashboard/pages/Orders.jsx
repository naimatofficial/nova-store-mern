import React from "react";
import Loader from "../../../components/Loader";
import TableView from "../../../components/table/TableView";
import { useGetOrdersQuery } from "../../../redux/slices/ordersApiSlice";
import ErrorMessage from "./../../../components/ErrorMessage";

const Orders = () => {
	const { data: orders, isLoading, isError, error } = useGetOrdersQuery({});

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div>
			{error && isError && <ErrorMessage error={error} />}
			<TableView data={orders?.doc} />
		</div>
	);
};

export default Orders;
