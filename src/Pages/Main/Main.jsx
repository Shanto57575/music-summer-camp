import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";

const Main = () => {
	return (
		<div className="font-serif">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
