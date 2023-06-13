/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Instructors = () => {
	const [instructors, setInstructors] = useState([]);
	const { loading } = useContext(AuthContext);
	console.log(instructors);
	useEffect(() => {
		fetch("https://music-summercamp-server.vercel.app/instructor")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
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
		<>
			<h1 className="mt-16 mb-12 text-center text-3xl font-bold">
				Unleash your musical potential <br /> with our,,, <br /> Musical Maestro
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 w-full mx-auto mb-5">
				{instructors.map((instructor) => (
					<div key={instructor._id}>
						<div className="card w-full lg:w-80 glass my-4 lg:my-0 mx-auto shadow-2xl">
							<figure>
								<img
									className="h-60 w-full"
									src={instructor.image}
									alt="musician"
								/>
							</figure>
							<div className="card-body font-serif font-bold">
								<h2 className="card-title">{instructor.name}</h2>
								<p>Contact Me : {instructor.email}</p>
								<p>{instructor.musicClasses} Maestro</p>
								<p>Total ClassesTaken : {instructor.classesTaken}</p>
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

export default Instructors;
