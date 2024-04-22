import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../../components/header/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
	return (
		<div>
			<Header />
			<main className="w-full">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default RootLayout;
