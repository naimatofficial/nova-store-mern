import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../../components/header/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const RootLayout = () => {
	const openWhatsAppChat = () => {
		window.open("https://wa.me/+923495580124", "_blank");
	};

	return (
		<div>
			<Header />
			<main className="w-full">
				<Outlet />
			</main>
			<Footer />
			{/* WhatsApp Chat Button */}
			<button
				className="whatsApp-btn flex justify-center items-center"
				onClick={openWhatsAppChat}
			>
				<FaWhatsapp className="w-8 h-8 text-white mr-3" />
				Chat on WhatsApp
			</button>
		</div>
	);
};

export default RootLayout;
