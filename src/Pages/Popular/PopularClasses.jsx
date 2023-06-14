import { useEffect, useState } from "react";

const PopularClasses = () => {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		fetch("https://music-summercamp-server.vercel.app/class")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);
	return (
		<div>
			<h1 className="text-center text-3xl my-10 text-cyan-500">
				This is Our Most Enrolled Classes
			</h1>
		</div>
	);
};

export default PopularClasses;
