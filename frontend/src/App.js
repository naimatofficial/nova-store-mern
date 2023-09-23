import React, { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/header/Header"));

function App() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
		</Suspense>
	);
}

export default App;
