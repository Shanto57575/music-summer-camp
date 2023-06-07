import { Link } from "react-router-dom";
import musicLogo from "../../../assets/music.png";
const Navbar = () => {
	const navItem = (
		<div className="text-lg lg:flex font-bold text-amber-500">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/instructors">Instructors</Link>
			</li>
			<li>
				<Link to="/classes">Classes</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/register">SignUp</Link>
			</li>
		</div>
	);
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navItem}
					</ul>
				</div>
				<div className="flex gap-2 items-center">
					<img className="w-20" src={musicLogo} alt="" />
					<h1 className="font-bold text-2xl">MelodicMuse</h1>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navItem}</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Button</a>
			</div>
		</div>
	);
};

export default Navbar;
