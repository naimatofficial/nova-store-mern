import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/slices/usersApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import Loader from "./../components/Loader";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.auth);
	const [login, { isLoading }] = useLoginMutation();

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate(redirect);
		} catch (err) {
			console.log(err?.data?.message);
			toast.error(err?.data?.message || err.error, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};

	return (
		<>
			<img
				src="/images/brand/nova-logo.png"
				alt="nova store logo"
				width={200}
				height={200}
				className="mx-auto mt-4 p-4"
			/>
			<div className="w-fit mx-auto mt-4 p-8 bg-white shadow-lg rounded-lg ">
				<Card color="transparent" shadow={false}>
					<Typography variant="h4" color="blue-gray">
						Login
					</Typography>
					<Typography color="gray" className="mt-1 font-normal">
						Welcome back to Nova Store
					</Typography>
					<form
						onSubmit={submitHandler}
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
					>
						<div className="mb-4 flex flex-col gap-6">
							<Input
								size="lg"
								label="Email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								type="password"
								size="lg"
								label="Password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<Button
							type="submit"
							fullWidth
							className="bg-yellow-600 text-black text-lg mt-6"
						>
							Login
						</Button>
						{isLoading && <Loader />}
					</form>
					<Typography color="gray" className="mt-4 text-center font-normal">
						New to Nova Store?
						<Link
							to="/register"
							className="font-medium text-gray-900 hover:underline ml-3"
						>
							Register Now
						</Link>
					</Typography>
				</Card>
			</div>
		</>
	);
};

export default LoginScreen;
