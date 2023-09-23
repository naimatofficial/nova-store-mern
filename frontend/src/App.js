<<<<<<< HEAD
import React, { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/header/Header"));

function App() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
		</Suspense>
	);
=======
import "./App.css";

function App() {
	return <>Nova Store App</>;
>>>>>>> 4287bdfc31ded292a81eb367cc408a296cf58016
}

export default App;
