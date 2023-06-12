/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import signUp from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
	const [showPassword, setShowPassword] = useState(true);
	const [showConfirm, setShowConfirm] = useState(true);
	const { createUser } = useContext(AuthContext);

	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const password = watch("password");
	const confirmPassword = watch("confirm");
	const passwordRegex =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	return (
		<div className="h-full bg-gray-400 my-10 py-5">
			<div className="lg:flex w-full">
				<div className="text-center lg:w-1/2">
					<img src={signUp} className="hidden lg:block" />
				</div>
				<div className="card flex-shrink-0 lg:max-w-lg shadow-2xl bg-gray-400 lg:w-1/2">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<h1 className="text-xl text-white font-serif font-bold text-center">
							Create an Account!
						</h1>
						<div className="flex gap-3">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-white">Name</span>
								</label>
								<input
									{...register("name", { required: true })}
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
								{errors.name && (
									<span className="text-red-600 mt-3 font-bold">
										Name is required
									</span>
								)}
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-white">Email</span>
								</label>
								<input
									{...register("email", { required: true })}
									type="email"
									placeholder="Email"
									className="input input-bordered"
								/>
								{errors.email && (
									<span className="text-red-600 mt-3 font-bold">
										Email is required
									</span>
								)}
							</div>
						</div>
						<div className="flex gap-3">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-white">Password</span>
								</label>
								<input
									{...register("password", {
										required: "Password is required",
										minLength: 6,
										maxLength: 20,
										pattern: {
											value: passwordRegex.toString(),
											message:
												"Password must be 6 char long, must have one capital letter and one special character",
										},
									})}
									type={showPassword ? "text" : "password"}
									placeholder="password"
									className="input input-bordered"
								/>
								<button
									onClick={() => setShowPassword(!showPassword)}
									className="relative"
								>
									{showPassword ? (
										<FaEye className="absolute -top-8 right-6" />
									) : (
										<FaEyeSlash className="absolute -top-8 right-6" />
									)}
								</button>
								{errors.password && (
									<span className="text-red-600 mt-3 font-bold">
										{errors.password.message}
									</span>
								)}
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text text-white">
										Confirm Password
									</span>
								</label>
								<input
									{...register("confirm", { required: true })}
									type={showConfirm ? "text" : "password"}
									placeholder="Confirm password"
									className="input input-bordered"
								/>
								<button
									onClick={() => setShowConfirm(!showConfirm)}
									className="relative"
								>
									{showConfirm ? (
										<FaEye className="absolute -top-8 right-6" />
									) : (
										<FaEyeSlash className="absolute -top-8 right-6" />
									)}
								</button>
								{errors.confirm && (
									<span className="text-red-600 mt-3 font-bold">
										Password confir mation is required
									</span>
								)}
								{password !== confirmPassword && (
									<span className="text-red-600 mt-3 font-bold">
										Password doesn't match
									</span>
								)}
							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-white">Photo URL</span>
							</label>
							<input
								{...register("photoURL", { required: true })}
								type="url"
								placeholder="Photo URL"
								className="input input-bordered"
							/>
							{errors.photoURL && (
								<span className="text-red-600 mt-3 font-bold">
									Photo URL is required
								</span>
							)}
						</div>
						<div className="form-control mt-6">
							<input type="submit" className="btn" value="Sign Up" />
							<Toaster position="top-center" reverseOrder={true} />
						</div>
						<p className="text-white text-sm">
							Already have an account ?
							<Link
								to="/login"
								className="link link-primary text-purple-600 font-bold hover:text-purple-800"
							>
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
