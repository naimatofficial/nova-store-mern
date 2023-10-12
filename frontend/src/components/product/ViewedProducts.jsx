import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import ProductCard from "./ProductCard";
import { Alert } from "@material-tailwind/react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1024 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 768, min: 640 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
	},
};

const ViewedProducts = () => {
	const { data, isLoading, isError, error } = useGetProductsQuery({});

	const [viewedProducts, setViewedProducts] = useState([]);

	useEffect(() => {
		if (data) {
			setViewedProducts(data?.doc);
		}
	}, [data]);

	if (isError && error) {
		return <Alert color="red">{error}</Alert>;
	}

	const customLeftArrow = (
		<div className="arrow-btn absolute left-0 cursor-pointer rounded-full  bg-orange-300 p-3 text-center">
			{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-white "
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg> */}
			<FaAngleLeft />
		</div>
	);
	const customRightArrow = (
		<div className="arrow-btn absolute right-0 cursor-pointer rounded-full bg-orange-300 p-3 text-center">
			{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-black"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg> */}
			<FaAngleRight />
		</div>
	);

	return (
		<div className="mb-8 w-3/4 mx-auto">
			<Carousel
				infinite
				customLeftArrow={customLeftArrow}
				customRightArrow={customRightArrow}
				responsive={responsive}
				itemClass="px-4"
			>
				{!isLoading &&
					viewedProducts.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
			</Carousel>
		</div>
	);
};

export default ViewedProducts;
