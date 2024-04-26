import { List } from "@material-tailwind/react";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarItems }) => {
	const sidebarWithoutLogout = sidebarItems.slice(0, -1); // Exclude the last item (Logout)
	const logoutItem = sidebarItems.slice(-1)[0]; // Get the last item (Logout)

	return (
		<div className="min-h-screen w-[18rem] shadow-md bg-blue-gray-900 text-gray-50 shadow-blue-gray-900/5">
			<div className="mb-2 p-4 bg-blue-gray-50 w-full flex justify-center items-center">
				<Link to="/">
					<img
						src="/images/brand/nova-logo.png"
						alt="logo"
						width={100}
						height={100}
						className="object-cover"
					/>
				</Link>
			</div>
			<List className="flex flex-col p-4 justify-between h-4/5 text-gray-100">
				<div className="flex flex-col gap-4">
					{sidebarWithoutLogout.map((item, index) => (
						<SidebarItem key={index} {...item} />
					))}
				</div>
				<SidebarItem {...logoutItem} />
			</List>
		</div>
	);
};
export default Sidebar;
