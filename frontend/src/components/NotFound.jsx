import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex h-96">
			<div className="m-auto text-center">
				<h1 className="text-4xl font-semibold text-gray-800 mb-3">
					Page Not Found!
				</h1>
				<p className="text-lg text-gray-600 mb-4">
					Soory! The page you are looking for does not exist.
				</p>
				<Link to="/">
					<Button variant="default" className="rounded-full">
						Go Back to Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
