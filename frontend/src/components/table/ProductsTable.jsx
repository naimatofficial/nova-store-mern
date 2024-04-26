import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductsTable = ({ data }) => {
	return (
		<div className="overflow-x-auto m-4 shadow-md rounded-md">
			<table className="min-w-full table-auto">
				<thead>
					<tr className="bg-green-400 text-white">
						<th className="py-2 px-4 text-left">Product</th>
						<th className="py-2 px-4 text-left">Price</th>
						<th className="py-2 px-4 text-left">Stock</th>
						<th className="py-2 px-4 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((item, index) => (
							<tr
								key={index}
								className={` ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
							>
								<td className="py-2 px-4 flex items-center gap-4">
									<img
										src={item.image}
										alt="product pic"
										className="rounded-full object-cover w-14 h-14"
									/>
									<Typography variant="paragraph">{item.name}</Typography>
								</td>
								<td className="py-2 px-4">${item.price}</td>
								<td className="py-2 px-4">{item.countInStock}</td>
								<td className="py-2 px-4 ">
									<div className="flex items-center gap-4">
										<FaEdit className="text-green-500" />
										<FaTrashAlt className="text-red-600" />
									</div>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={4} className="py-4 px-4 text-center">
								No data available!
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

ProductsTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsTable;
