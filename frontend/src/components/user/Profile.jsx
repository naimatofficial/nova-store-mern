import React from "react";
import { useDispatch } from "react-redux";
import { clearViewedProducts } from "../../redux/slices/recentlyViewedSlice";
import { Button } from "@material-tailwind/react";

const Profile = () => {
	const dispatch = useDispatch();
	const clearRecentlyViewedProducts = () => {
		dispatch(clearViewedProducts());
	};

	return (
		<div>
			Profile
			<Button onClick={clearRecentlyViewedProducts}>
				Clear Viewed Products
			</Button>
		</div>
	);
};

export default Profile;
