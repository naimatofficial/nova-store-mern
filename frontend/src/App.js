import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Loader from "./components/Loader";

const Header = lazy(() => import("./components/header/Header"));

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Header />
			<Routes>
				<Route path="/" component={<HomeScreen />} />
			</Routes>
		</Suspense>
	);
}

export default App;
