import React, { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ** COMPONENTS ** //
import Loader from "./components/Loader";
import RootLayout from "./layouts/_root/RootLayout";
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
import AuthLayout from "./layouts/_auth/AuthLayout";
import SignInForm from "./layouts/_auth/form/SignInForm";
import SignUpForm from "./layouts/_auth/form/SignUpForm";

function App() {
	return (
		<div className="app">
			{/* ToastConatiner For Status -- Error, Success, Failed */}
			<ToastContainer />
			<Suspense fallback={<Loader />}>
				<Routes>
					{/* Auth Layout  */}
					<Route path="/auth/*" element={<AuthLayout />}>
						<Route path="/auth/sign-in" element={<SignInForm />} />
						<Route path="/auth/sign-up" element={<SignUpForm />} />
					</Route>

					{/* Public */}
					<Route path="/" element={<RootLayout />}>
						<Route index element={<HomeScreen />} />
						<Route path="/product/:productId" element={<ProductScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/checkout" element={<CheckoutScreen />} />
					</Route>

					<Route path="/dashboard/*" element={<DashboardLayout />}>
						<Route index element={<Dashboard />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
