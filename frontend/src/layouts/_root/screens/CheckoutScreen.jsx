import { useForm } from "react-hook-form";
import CustomInput from "../../_dashboard/_components/CustomInput";

const CheckoutScreen = () => {
	const storedData = JSON.parse(localStorage.getItem("checkoutData")) || {};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: storedData,
	});

	const onSubmit = (data) => {
		// Store all the form data in local storage
		localStorage.setItem("checkoutData", JSON.stringify(data));
		// Place order logic here
		console.log("Order placed with data:", data);
	};

	return (
		<div className="container mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6">Checkout</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<CustomInput
						type="text"
						label="Address"
						placeholder=""
						name="address"
						register={register}
						error={errors.address}
					/>
				</div>
				<div className="mb-4">
					<CustomInput
						type="text"
						label="Phone Number"
						placeholder=""
						name="phoneNumber"
						register={register}
						error={errors.phoneNumber}
					/>
				</div>
				<div className="mb-4">
					<CustomInput
						type="number"
						label="Postal Code"
						placeholder=""
						name="postalCode"
						register={register}
						error={errors.postalCode}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Payment Method
					</label>
					<select
						className="custom-input"
						defaultValue="COD"
						{...register("paymentMethod")}
					>
						<option value="COD">Cash on Delivery</option>
					</select>
				</div>
				<button
					type="submit"
					className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
				>
					Place Order
				</button>
			</form>
		</div>
	);
};

export default CheckoutScreen;
