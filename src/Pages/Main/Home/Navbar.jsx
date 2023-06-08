import { Link } from "react-router-dom";
import musicLogo from "../../../assets/music.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";

const Navbar = () => {
	const { user, LogOut } = useContext(AuthContext);
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme("luxury");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		const localTheme = localStorage.getItem("theme");
		document.querySelector("html").setAttribute("data-theme", localTheme);
	}, [theme]);

	const handleLogout = () => {
		LogOut()
			.then(() => {
				toast.success("Signed Out Successfully!");
			})
			.catch(() => {
				toast.error("Try Again!!!");
			});
	};

	console.log(user);
	const navItem = (
		<div className="text-lg lg:flex font-bold">
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
				<Link to="/dashboard">Dashboard</Link>
			</li>{" "}
			<li>
				<label className="swap swap-rotate">
					<input type="checkbox" onChange={handleToggle} />
					<FaSun className="swap-on fill-current w-10 h-6"></FaSun>
					<FaMoon className="swap-off fill-current w-10 h-6" />
				</label>
			</li>
			{user ? (
				<li onClick={handleLogout}>
					<Link>SignOut</Link>
					<Toaster position="top-center" reverseOrder={true} />
				</li>
			) : (
				<li>
					<Link to="/register">SignUp</Link>
				</li>
			)}
		</div>
	);
	return (
		<div className="navbar sticky top-0 z-50 h-20 bg-white shadow-xl">
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
			<div className="navbar-end mr-7">
				{user ? (
					<p>
						<img
							className="w-10 rounded-full ring ring-slate-700 ring-offset-base-100 ring-offset-2"
							src={user.photoURL}
							title={user.displayName}
							alt=""
						/>
					</p>
				) : (
					<p className="text-lg font-bold flex items-center gap-2">
						<Link to="/login">Sign In</Link>
						<FaUserAlt className="" />
					</p>
				)}
			</div>
		</div>
	);
};

export default Navbar;
