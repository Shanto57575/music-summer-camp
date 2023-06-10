import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaDollarSign } from "react-icons/fa";

const Classes = () => {
	const [classes, setClasses] = useState([]);
	const { loading } = useContext(AuthContext);

	console.log(classes);
	useEffect(() => {
		fetch("http://localhost:5000/class")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);

	const handleSelection = (_id) => {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Your Class has been Selected!",
			showConfirmButton: false,
			timer: 1500,
		});
		const selectedClass = classes.find((item) => item._id === _id);
		console.log(_id);
		fetch("http://localhost:5000/student", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(selectedClass),
		});
	};

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
		<>
			<h1 className="mt-16 mb-12 text-center text-3xl font-bold">
				Enroll in Our Classes with Dedicated Teachers{" "}
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 w-full mx-auto mb-5">
				{classes.map((item) => (
					<div key={item._id}>
						<div className="block rounded-lg bg-white text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700">
							<div
								className="relative overflow-hidden bg-cover bg-no-repeat"
								data-te-ripple-init
								data-te-ripple-color="light"
							>
								<figure>
									<img
										className="h-60 w-full"
										src={item.image}
										alt="musician"
									/>
									<p className="absolute right-5 top-2 flex gap-1 rounded items-center bg-black p-2">
										<FaDollarSign /> {item.price}
									</p>
								</figure>
								<a href="#!">
									<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
								</a>
							</div>
							<div className="p-6 space-y-1">
								<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"></h5>
								<p className="text-xl font-bold">
									Master...{item.musicClasses},
								</p>
								<p className="text-xl font-bold">with {item.name}</p>
								<p className="text-base">
									Available seats : {item.availableSeats}
								</p>
								<Link>
									<button
										onClick={() => handleSelection(item._id)}
										type="button"
										className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 text-center mr-2 mb-2"
									>
										Select
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Classes;
