/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="text-green-500 h-full text-center">
				<span className="loading loading-bars loading-xs"></span>
				<span className="loading loading-bars loading-sm"></span>
				<span className="loading loading-bars loading-md"></span>
				<span className="loading loading-bars loading-lg"></span>
			</div>
		);
	}

	if (!user) {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Login to access the dashboard!",
		});
	}
	if (user) {
		return children;
	}

	return (
		<Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
	);
};

export default PrivateRoute;
