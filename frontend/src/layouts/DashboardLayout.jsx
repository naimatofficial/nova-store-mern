import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
	const userInfo = useSelector((state) => state.auth.userInfo);
	const navigate = useNavigate();
	const user = useMemo(() => userInfo?.user || [], [userInfo]);

	const isAdmin = user && user?.role === "admin";

	useEffect(() => {
		if (!isAdmin) {
			navigate("/");
		}
	}, [isAdmin, navigate, user]);

	if (!isAdmin) {
		return null;
	}

	return (
		<>
			{/* <DashboardHeader /> */}
			<div className="">
				{/* <Sidebar /> */}
				<main>{children}</main>
			</div>
		</>
	);
};

export default DashboardLayout;
