import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";
import Home from "./Pages/Main/Home/Home.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import Register from "./Pages/Authentication/Register.jsx";
import Instructors from "./Pages/Instructors/Instructors.jsx";
import Classes from "./Pages/Classes/Classes.jsx";
import AuthProvider from "./Provider/AuthProvider";
import Dashboard from "./Pages/Main/Home/Dashboard/Dashboard";
import PrivateRoute from "./Pages/Route/PrivateRoute";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/instructors",
				element: <Instructors></Instructors>,
			},
			{
				path: "/classes",
				element: <Classes></Classes>,
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard></Dashboard>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<div className="">
				<RouterProvider router={router} />
			</div>
		</AuthProvider>
	</React.StrictMode>
);
