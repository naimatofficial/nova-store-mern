import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const HomeLayout = ({ children }) => {
	const { pathname } = useLocation();

	return (
		<>
			{pathname !== "/login" && pathname !== "/register" && <Header />}
			<main>{children}</main>
			{pathname !== "/login" && pathname !== "/register" && <Footer />}
		</>
	);
};

export default HomeLayout;
