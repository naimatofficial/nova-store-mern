import Product from "../models/productModel.js";
import catchAsync from "../utils/catchAsync.js";

import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createProduct = async (req, res) => {
	const { name, description, brand, category, price, countInStock } = req.body;
	const imagePath = req.file.path;

	const newProduct = new Product({
		name,
		description,
		brand,
		category,
		price,
		countInStock,
		image: imagePath,
	});

	try {
		const savedProduct = await newProduct.save();
		res.status(201).json(savedProduct);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

export const getProducts = getAll(Product);
export const getProduct = getOne(Product);
export const deleteProduct = deleteOne(Product);
export const updateProduct = updateOne(Product);

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
export const createProductReview = catchAsync(async (req, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error("Product already reviewed");
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};

		product.reviews.push(review);

		product.numReviews = product.reviews.length;

		product.rating =
			product.reviews.reduce((acc, item) => item.rating + acc, 0) /
			product.reviews.length;

		await product.save();
		res.status(201).json({ message: "Review added" });
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
export const getTopProducts = catchAsync(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(3);

	res.json(products);
});
