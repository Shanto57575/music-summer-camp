import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Dashboard = () => {
	const [selectedClasses, setSelectedClasses] = useState([]);

	const { user, loading } = useContext(AuthContext);

	console.log(selectedClasses);

	useEffect(() => {
		if (!user?.email) return;
		fetch(`http://localhost:5000/class/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setSelectedClasses(data));
	}, [user?.email]);

	if (loading) {
		return (
			<div className="text-center my-4">
				<span className="loading loading-bars loading-xs"></span>
				<span className="loading loading-bars loading-sm"></span>
				<span className="loading loading-bars loading-md"></span>
				<span className="loading loading-bars loading-lg"></span>
			</div>
		);
	}

	return (
		<div>
			<h1 className="text-center my-10 text-2xl font-bold w-full mx-auto">
				My Selected Classes
			</h1>
			<div className="overflow-x-auto font-bold">
				<table className="table">
					<thead className="text-center font-bold">
						<tr>
							<th></th>
							<th>Teacher Name</th>
							<th>Music Class</th>
							<th>Price</th>
							<th>Payment</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{selectedClasses.map((selectedClass) => (
							<tr key={selectedClass._id}>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={selectedClass.image}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>{" "}
									</div>
								</td>
								<td>{selectedClass.name}</td>
								<td>{selectedClass.musicClasses}</td>
								<td>${selectedClass.price}</td>
								<td>
									<button
										type="button"
										className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
									>
										Payment
									</button>
								</td>
								<td>
									<button
										type="button"
										className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
