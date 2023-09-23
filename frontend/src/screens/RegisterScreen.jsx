import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
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
						Sign Up
					</Typography>
					<Typography color="gray" className="mt-1 font-normal">
						Connect with Nova Store 💙
					</Typography>
					<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
						<div className="mb-4 flex flex-col gap-6">
							<Input size="lg" label="Name" />
							<Input size="lg" label="Email" />
							<Input type="password" size="lg" label="Password" />
						</div>
						<Checkbox
							label={
								<Typography
									variant="small"
									color="gray"
									className="flex items-center font-normal"
								>
									I agree the
									<Link
										to="/"
										className="font-medium transition-colors hover:text-gray-900"
									>
										&nbsp;Terms and Conditions
									</Link>
								</Typography>
							}
							containerProps={{ className: "-ml-2.5" }}
						/>
						<Button className="mt-6 bg-yellow-800 text-white text-lg" fullWidth>
							Register
						</Button>
						<Typography color="gray" className="mt-4 text-center font-normal">
							Already have an account?{" "}
							<Link
								to="/login"
								className="font-medium text-gray-900 hover:underline"
							>
								Login
							</Link>
						</Typography>
					</form>
				</Card>
			</div>
		</>
	);
};
export default RegisterScreen;
