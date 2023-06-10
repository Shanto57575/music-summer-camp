import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHeart } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const PopularInstructor = () => {
	useEffect(() => {
		Aos.init({ duration: 200 });
	}, []);

	const [instructors, setInstructors] = useState([]);
	const { loading } = useContext(AuthContext);
	console.log(instructors);

	useEffect(() => {
		fetch("http://localhost:5000/instructor")
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
				Meet Our Finest Musical Mentor{" "}
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 w-full mx-auto mb-5">
				{instructors.slice(0, 6).map((instructor, index) => (
					<div
						key={instructor._id}
						className="card w-full lg:w-96 glass my-4 lg:my-0 mx-auto shadow-2xl"
						style={{ transitionDelay: `${index * 0.1}s` }}
					>
						<figure className="hover:brightness-75">
							<img
								data-aos="zoom-in-up"
								data-aos-easing="ease-out-back"
								data-aos-duration="2000"
								className="h-60 w-full"
								src={instructor.image}
								alt="musician"
							/>
						</figure>
						<div className="card-body font-serif font-bold transition duration-500 ease-in-out hover:bg-slate-500 hover:text-white">
							<h2 className="card-title">{instructor.name}</h2>
							<p>{instructor.musicClasses} Maestro</p>
							<p>Total Classes Taken: {instructor.classesTaken}</p>
							<p className="text-red-500 text-xl font-extrabold absolute right-5 top-5">
								<FaHeart />
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default PopularInstructor;
