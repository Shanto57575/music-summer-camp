import { Link } from "react-router-dom";
import fourOFour from "./assets/charshoChar.png";

const Error = () => {
	return (
		<div className="bg-black h-screen py-40 lg:px-96 lg:py-36">
			<img className="animate-bounce" src={fourOFour} alt="" />
			<Link
				to="/"
				className="ml-12 lg:ml-60 cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-600 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
			>
				Back to Home
			</Link>
		</div>
	);
};

export default Error;
