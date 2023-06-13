import { Link } from "react-router-dom";
import musicLogo from "../../../assets/music.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
	const { user, LogOut } = useContext(AuthContext);
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme("night");
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
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Logged Out successfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			});
	};

	// console.log(user);
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
				<Link to="/music">Dashboard</Link>
			</li>
			<li>
				<label className="swap swap-rotate">
					<input type="checkbox" onChange={handleToggle} />
					<FaSun className="swap-on fill-current mt-2"></FaSun>
					<FaMoon className="swap-off fill-current mt-2" />
				</label>
			</li>
			{user ? (
				<li onClick={handleLogout}>
					<Link>SignOut</Link>
				</li>
			) : (
				<li>
					<Link to="/register">SignUp</Link>
				</li>
			)}
		</div>
	);
	return (
		<div className="navbar sticky z-50 h-16 shadow-xl p-12">
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
					<h1 className="font-bold text-2xl hidden md:block">MelodicMuse</h1>
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
							src={user.photoURL ? user.photoURL : "loading"}
							title={user.displayName}
							alt="loading"
						/>
					</p>
				) : (
					<p className="text-lg font-bold flex items-center gap-2">
						<Link to="/login">Sign In</Link>
					</p>
				)}
			</div>
		</div>
	);
};

export default Navbar;
