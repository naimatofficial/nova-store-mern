import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Rating,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
	function trimText(text, maxLength) {
		if (text.length <= maxLength) {
			return text;
		}
		return text.slice(0, maxLength) + "...";
	}

	if (!product) {
		return <p>Product data is missing or invalid.</p>;
	}

	const productRating = (Math.round(product.rating * 10) / 10).toFixed(1); // 3 --> 3.0

	return (
		<Card className="w-64">
			<CardHeader shadow={false} floated={false} className="h-48">
				<Link to={`/product/${product._id}`}>
					<img
						src={product.image}
						alt="card-img"
						className="h-full w-full object-cover"
					/>
				</Link>
			</CardHeader>
			<CardBody>
				<div className="mb-2 flex items-center justify-between">
					<Link to={`/product/${product._id}`} className="hover:underline">
						<Typography color="blue-gray" className="font-medium">
							{trimText(product.name, 40)}
						</Typography>
					</Link>
				</div>
				<div>
					<Typography color="blue-gray" className="font-medium text-blue-400">
						${product.price}
					</Typography>
				</div>
				<div className="flex items-center gap-2">
					<Rating value={Math.round(product.rating)} readonly />
					<span className="font-medium">({productRating})</span>
				</div>
			</CardBody>
			<CardFooter className="pt-0">
				<Button
					ripple={false}
					fullWidth={true}
					className="bg-orange-400 text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
				>
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	);
}
