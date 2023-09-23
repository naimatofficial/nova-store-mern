import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";

const LoginScreen = () => {
	return (
		<>
			<img
				src="/images/brand/nova-logo.png"
				alt="nova store logo"
				width={200}
				height={200}
				className="mx-auto mt-4 p-4"
			/>
			<div className="w-fit mx-auto mt-4 p-8 bg-white shadow-lg rounded-md ">
				<Card color="transparent" shadow={false}>
					<Typography variant="h4" color="blue-gray">
						Login
					</Typography>
					<Typography color="gray" className="mt-1 font-normal">
						Connect with Nova Store 💙
					</Typography>
					<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
						<div className="mb-4 flex flex-col gap-6">
							<Input size="lg" label="Email" />
							<Input type="password" size="lg" label="Password" />
						</div>

						<Button fullWidth className="bg-yellow-800 text-white text-lg mt-6">
							Login
						</Button>
						<Typography color="gray" className="mt-4 text-center font-normal">
							New to Nova Store?
							<Link
								to="/register"
								className="font-medium text-gray-900 hover:underline"
							>
								Register Now
							</Link>
						</Typography>
					</form>
				</Card>
			</div>
		</>
	);
};

export default LoginScreen;
