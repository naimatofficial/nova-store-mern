import React from "react";
import Loader from "../../../components/Loader";
import TableView from "../../../components/TableView";
import { useGetUsersQuery } from "../../../redux/slices/usersApiSlice";

const Users = () => {
	const { data: users, isLoading, isError, error } = useGetUsersQuery({});

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
			<TableView data={users?.doc} />
		</div>
	);
};

export default Users;
