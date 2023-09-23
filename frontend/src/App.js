import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

// ** COMPONENTS ** //
const Header = lazy(() => import("./components/header/Header"));

// ** SCREENS OR LAYOUTS ** //
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const ProductScreen = lazy(() => import("./screens/ProductScreen"));

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/register" element={<RegisterScreen />} />
				<Route path="/product/:productId" element={<ProductScreen />} />
			</Routes>
		</Suspense>
	);
}

export default App;
