import React from "react";
import {
	Navbar,
	Typography,
	Button,
	IconButton,
	Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/category/laptops" className="flex items-center">
					Laptops
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<Link to="/category/mobiles" className="flex items-center">
					Mobiles
				</Link>
			</Typography>
		</ul>
	);

	return (
		<div className="">
			<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link to="/">
						<img
							src="/images/brand/nova-logo.png"
							alt="logo"
							width={80}
							height={80}
							className="object-cover"
						/>
					</Link>
					<div className="flex items-center gap-4">
						<div className="mr-4 hidden lg:block">{navList}</div>
						<Button variant="outlined" size="sm" className="">
							<Link to="/login">Login</Link>
						</Button>
						<Button variant="gradient" size="sm" className="">
							<Link to="/register">Register</Link>
						</Button>
						<div>
							<FaShoppingCart className="text-lg" />
						</div>
						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<Collapse open={openNav}>{navList}</Collapse>
			</Navbar>
		</div>
	);
}
