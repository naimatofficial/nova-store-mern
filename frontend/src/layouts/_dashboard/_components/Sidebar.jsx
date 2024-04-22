import { List, Typography } from "@material-tailwind/react";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ sidebarItems }) => {
	const sidebarWithoutLogout = sidebarItems.slice(0, -1); // Exclude the last item (Logout)
	const logoutItem = sidebarItems.slice(-1)[0]; // Get the last item (Logout)

	return (
		<div className="min-h-screen w-[18rem] p-4 shadow-md bg-blue-gray-900 text-gray-50 shadow-blue-gray-900/5">
			<div className="mb-2 p-4 flex items-center gap-2">
				{/* <img src={Logo} alt="logo" width={48} height={48} /> */}

				<Typography
					variant="h5"
					color="blue-gray"
					className=" uppercase font-bold text-gray-100"
				>
					Nova Store
				</Typography>
			</div>
			<List className="flex flex-col justify-between h-4/5 text-gray-100">
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
