import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/register.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
	const [showPassword, setShowPassword] = useState(true);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const onSubmit = (data) => {
		console.log(data);
		console.log(data.name, data.photoURL);
		signIn(data.email, data.password)
			.then((result) => {
				navigate(from, { replace: true });

				console.log(result.user);
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Logged In successfully!",
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const handleGoogle = () => {
		googleSignIn()
			.then((result) => {
				navigate(from, { replace: true });
				console
					.log(result.user)
					.then(() => {
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Logged In successfully!",
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
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const handleGithub = () => {
		githubSignIn()
			.then((result) => {
				navigate(from, { replace: true });
				console
					.log(result.user)

					.then(() => {
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Logged In successfully!",
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
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			});
	};

	return (
		<div className="hero h-full bg-gray-400 my-10">
			<div className="hero-content">
				<div className="text-center">
					<img src={login} className="hidden lg:block" />
				</div>
				<div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-gray-400">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<h1 className="text-xl font-serif text-white font-bold text-center">
							Login Here
						</h1>
						<div className="form-control">
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
						<div className="form-control">
							<label className="label">
								<span className="label-text text-white">Password</span>
							</label>
							<input
								{...register("password", { required: true })}
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
									Password is required
								</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-white">Or</span>
							</label>
							<div className="flex gap-4 w-full">
								<div
									onClick={handleGoogle}
									className="text-center cursor-pointer w-1/2 text-3xl bg-gray-600 hover:bg-black border p-2 rounded-lg flex items-center gap-2"
								>
									<FcGoogle />
									<span className="text-sm font-semibold text-white">
										Sign In with Google
									</span>
									<Toaster position="top-center" reverseOrder={true} />
								</div>
								<div
									onClick={handleGithub}
									className="text-center cursor-pointer w-1/2 text-3xl bg-gray-600 hover:bg-black border p-2 rounded-lg flex items-center gap-2"
								>
									<FaGithub />
									<span className="text-sm font-semibold text-white">
										Sign In with Github
									</span>
									<Toaster position="top-center" reverseOrder={true} />
								</div>
							</div>
						</div>
						<div className="form-control mt-6">
							<input type="submit" className="btn" value="Sign In" />
						</div>
						<p className="text-black text-sm">
							New to this site ?
							<Link
								to="/register"
								className="link link-primary text-purple-700 hover:text-red-500"
							>
								Sign Up
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
