import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
	const [classes, setClasses] = useState([]);
	console.log(classes);
	useEffect(() => {
		fetch("http://localhost:5000/class")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);

	return (
		<>
			<h1 className="mt-16 mb-12 text-center text-3xl font-bold">
				Unleash your musical potential <br /> with our,,, <br /> Musical Maestro
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full mx-auto lg:mx-5">
				{classes.map((item) => (
					<div key={item._id}>
						<div className="card w-96 lg:w-80 glass mx-auto">
							<figure>
								<img className="h-60 w-full" src={item.image} alt="musician" />
							</figure>
							<div className="card-body font-serif font-bold">
								<h2 className="card-title">{item.name}</h2>
								<p>Contact Me : {item.availableSeats}</p>
								<p>{item.musicClasses} teacher</p>
								<p>Total ClassesTaken : {item.price}</p>
								<div className="card-actions justify-end">
									<Link to="">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
										>
											See Classes
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Classes;
