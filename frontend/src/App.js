import React, { Suspense, lazy } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ** COMPONENTS ** //
import Loader from "./components/Loader";
import DashboardLayout from "./layouts/DashboardLayout";
import HomeLayout from "./layouts/HomeLayout";

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

	const isDashboardRoute = pathname.startsWith("/dashboard");

	return (
		<div className="app">
			<ToastContainer />

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={
							isDashboardRoute ? (
								<DashboardLayout>
									<Outlet />
								</DashboardLayout>
							) : (
								<HomeLayout>
									<Outlet />
								</HomeLayout>
							)
						}
					>
						<Route index element={<HomeScreen />} />
						<Route path="/product/:productId" element={<ProductScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/checkout" element={<CheckoutScreen />} />
					</Route>

					<Route path="/login" element={<LoginScreen />} />
					<Route path="/register" element={<RegisterScreen />} />

					<Route
						path="/dashboard/*"
						element={
							isDashboardRoute ? (
								<DashboardLayout>
									<Outlet />
								</DashboardLayout>
							) : (
								<HomeLayout>
									<Outlet />
								</HomeLayout>
							)
						}
					>
						<Route index element={<Dashboard />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
