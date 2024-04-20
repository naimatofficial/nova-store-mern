import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
	const isAuthenticated = true;
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			return navigate("/auth/sign-in");
		}
	}, [isAuthenticated, navigate]);

	return (
		<div>
			DashboardLayout
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
