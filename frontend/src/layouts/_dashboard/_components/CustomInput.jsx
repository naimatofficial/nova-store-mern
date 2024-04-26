import React from "react";

const CustomInput = ({ type, label, placeholder, name, register, error }) => {
	return (
		<div className="mb-6">
			<label className="block text-sm font-medium text-gray-700">{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				{...register(name, { required: `${label} is required` })}
				className={`mt-1 block w-full px-3 py-2 border ${
					error ? "border-red-500" : "border-gray-300"
				} rounded-md shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm`}
			/>
			{error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
		</div>
	);
};

export default CustomInput;
