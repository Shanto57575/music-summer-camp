import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PopularClasses = () => {
	const { user, loading } = useContext(AuthContext);

	const [classes, setClasses] = useState([]);

	useEffect(() => {
		fetch("https://music-summercamp-server.vercel.app/class")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

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
			<h1 className="text-center text-3xl my-10 text-cyan-500">
				This is Our Most Enrolled Classes
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 w-full mx-auto mb-5">
				{classes.slice(0, 6).map((item) => (
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
									<p className="absolute right-5 top-2 flex gap-1 rounded items-center font-semibold bg-black p-2">
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
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularClasses;
