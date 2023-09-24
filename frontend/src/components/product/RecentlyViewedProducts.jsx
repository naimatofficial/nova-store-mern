import { Alert, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";
import { useSelector } from "react-redux";

const RecentlyViewedProducts = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});
   const recentlyViewed = useSelector((state) => state.recentlyViewed);
   
   const filteredProducts = []
   useEffect(() => {
     
   }, []);


	if (isLoading) {
		return <Loader />;
	}

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}
	console.log("recent products", recentlyViewed);

	// let filteredProducts;
	// if (data && data.doc) {
	// 	filteredProducts = data.doc.filter((p) => p._id !== recentlyViewed) || [];
	// }


	return (
		<div>
			<Typography variant="h3">Recently Viewed Products</Typography>
		</div>
	);
};

export default RecentlyViewedProducts;
