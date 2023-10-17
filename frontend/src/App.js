import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ** COMPONENTS ** //
import Loader from "./components/Loader";
const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/Footer"));
const NotFound = lazy(() => import("./components/NotFound"));

// ** SCREENS OR LAYOUTS ** //
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const ProductScreen = lazy(() => import("./screens/ProductScreen"));
const ProfileScreen = lazy(() => import("./screens/ProfileScreen"));
const CartScreen = lazy(() => import("./screens/CartScreen"));
const CheckoutScreen = lazy(() => import("./screens/CheckoutScreen"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

function App() {
	const { pathname } = useLocation();

	return (
		<Suspense fallback={<Loader />}>
			<ToastContainer />
			{pathname !== "/login" && pathname !== "/register" && <Header />}
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="/product/:productId" element={<ProductScreen />} />
				<Route path="/profile" element={<ProfileScreen />} />
				<Route path="/cart" element={<CartScreen />} />
				<Route path="/checkout" element={<CheckoutScreen />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{pathname !== "/login" && pathname !== "/register" && <Footer />}
		</Suspense>
	);
}

export default App;
