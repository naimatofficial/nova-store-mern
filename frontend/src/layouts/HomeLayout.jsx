import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const HomeLayout = ({ children }) => {
	const { pathname } = useLocation();

	const isDashboardRoute = pathname.startsWith("/dashboard");

	return (
		<>
			{pathname !== "/login" &&
				pathname !== "/register" &&
				!isDashboardRoute && <Header />}
			<main>{children}</main>
			{pathname !== "/login" &&
				pathname !== "/register" &&
				!isDashboardRoute && <Footer />}
		</>
	);
};

export default HomeLayout;
