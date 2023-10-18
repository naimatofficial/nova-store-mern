import React, { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ** COMPONENTS ** //
import Loader from "./components/Loader";
const NotFound = lazy(() => import("./components/NotFound"));

// ** SCREENS OR LAYOUTS ** //
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const ProductScreen = lazy(() => import("./screens/ProductScreen"));
const ProfileScreen = lazy(() => import("./screens/ProfileScreen"));
const CartScreen = lazy(() => import("./screens/CartScreen"));
const CheckoutScreen = lazy(() => import("./screens/CheckoutScreen"));
const Dashboard = lazy(() => import("./dashboard"));
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));

function App() {
	return (
		<div className="app">
			{/* ToastConatiner For Status -- Error, Success, Failed */}
			<ToastContainer />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={
							<AppLayout>
								<Outlet />
							</AppLayout>
						}
					>
						<Route index element={<HomeScreen />} />
						<Route path="/product/:productId" element={<ProductScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/checkout" element={<CheckoutScreen />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
					</Route>

					<Route
						path="/dashboard/*"
						element={
							<DashboardLayout>
								<Outlet />
							</DashboardLayout>
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
