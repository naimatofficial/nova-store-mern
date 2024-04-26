import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Button } from "@material-tailwind/react";
import CustomInput from "../_components/CustomInput";
import FileUploader from "../_components/FileUploader";

const CreateProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [selectedFile, setSelectedFile] = useState(null);

	const onSubmit = (data) => {
		console.log(data);
		console.log(selectedFile);
		// Perform API call or other actions with form data and image
	};

	const handleFileChange = useCallback(
		(files) => {
			setSelectedFile(files[0]);
			console.log(files);
		},
		[setSelectedFile]
	);

	const onDrop = useCallback(
		(acceptedFiles) => {
			// Do something with the accepted file (e.g., pass it to parent component)
			handleFileChange(acceptedFiles[0]);
		},
		[handleFileChange]
	);

	return (
		<div className="container mx-auto mt-10 p-4">
			<form onSubmit={handleSubmit(onSubmit)}>
				<CustomInput
					type="text"
					label="Name"
					placeholder="Product Name"
					name="name"
					register={register}
					error={errors.name}
				/>
				<CustomInput
					type="text"
					label="Description"
					placeholder="Product Description"
					name="description"
					register={register}
					error={errors.description}
				/>
				<CustomInput
					type="text"
					label="Brand"
					placeholder="Product Brand"
					name="brand"
					register={register}
					error={errors.brand}
				/>
				<CustomInput
					type="text"
					label="Category"
					placeholder="Product Category"
					name="category"
					register={register}
					error={errors.category}
				/>
				<CustomInput
					type="number"
					label="Price"
					placeholder="Product Price"
					name="price"
					register={register}
					error={errors.price}
				/>
				<CustomInput
					type="number"
					label="Count In Stock"
					placeholder="Count In Stock"
					name="countInStock"
					register={register}
					error={errors.countInStock}
				/>

				<div className="mb-6">
					<FileUploader fieldChange={handleFileChange} />
				</div>

				<div className="mt-6">
					<Button type="submit" color="lightBlue">
						Create Product
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateProduct;
