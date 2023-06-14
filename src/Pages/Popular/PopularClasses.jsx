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
		</div>
	);
};

export default PopularClasses;
