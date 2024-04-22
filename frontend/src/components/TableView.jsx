import PropTypes from "prop-types";

const TableView = ({ data }) => {
	return (
		<div className="overflow-x-auto m-4 shadow-md rounded-md">
			<table className="min-w-full table-auto">
				<thead>
					<tr className="bg-green-400 text-white">
						<th className="py-2 px-4 text-left">S.No</th>
						<th className="py-2 px-4 text-left">Name</th>
						<th className="py-2 px-4 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((item, index) => (
							<tr
								key={index}
								className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
							>
								<td className="py-2 px-4">{++index}</td>
								<td className="py-2 px-4">{item.name}</td>
								<td className="py-2 px-4">action button</td>
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

TableView.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableView;
