import React, { useEffect } from "react";
import Profile from "../components/user/Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
	const userInfo = useSelector((state) => state.auth.userInfo);
	const navigate = useNavigate();

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
	}, [userInfo, navigate]);

	return userInfo && <Profile user={userInfo.user} />;
};

export default ProfileScreen;
