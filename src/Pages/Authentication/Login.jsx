import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/register.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

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
		signIn(data.email, data.password)
			.then((result) => {
				navigate(from, { replace: true });
				console.log(result.user);
				toast.custom((t) => (
					<div
						className={`${
							t.visible ? "animate-enter" : "animate-leave"
						} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
					>
						<div className="flex-1 w-0 p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 pt-0.5">
									<img
										className="h-10 w-10 rounded-full"
										src={result?.user?.photoURL}
										alt=""
									/>
								</div>
								<div className="ml-3 flex-1">
									<p className="text-sm  font-serif font-bold  text-green-600">
										{result?.user?.displayName}{" "}
										<span> Logged in successfully!</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				));
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const handleGoogle = () => {
		googleSignIn()
			.then((result) => {
				navigate(from, { replace: true });
				console.log(result.user);
				toast.custom((t) => (
					<div
						className={`${
							t.visible ? "animate-enter" : "animate-leave"
						} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
					>
						<div className="flex-1 w-0 p-4">
							<div className="flex items-center">
								<div className="flex-shrink-0 pt-0.5">
									<img
										className="h-10 w-10 rounded-full"
										src={result?.user?.photoURL}
										alt=""
									/>
								</div>
								<div className="ml-3">
									<p className="text-sm font-serif font-bold  text-green-600 ">
										{result?.user?.displayName}{" "}
										<span> Logged in successfully!</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				));
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	const handleGithub = () => {
		githubSignIn()
			.then((result) => {
				navigate(from, { replace: true });
				console.log(result.user);

				toast.custom((t) => (
					<div
						className={`${
							t.visible ? "animate-enter" : "animate-leave"
						} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
					>
						<div className="flex-1 w-0 p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 pt-0.5">
									<img
										className="h-10 w-10 rounded-full"
										src={result?.user?.photoURL}
										alt=""
									/>
								</div>
								<div className="ml-3 flex-1">
									<p className="text-sm font-serif font-bold  text-green-600 ">
										{result?.user?.displayName}{" "}
										<span> Logged in successfully!</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				));
			})
			.catch((error) => {
				toast.error(error.message);
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
									className="text-center cursor-pointer w-1/2 text-3xl bg-gray-600 hover:bg-gray-800 border p-2 rounded-lg flex items-center gap-2"
								>
									<FcGoogle />
									<span className="text-sm font-semibold text-white">
										Sign In with Google
									</span>
									<Toaster position="top-center" reverseOrder={true} />
								</div>
								<div
									onClick={handleGithub}
									className="text-center cursor-pointer w-1/2 text-3xl bg-gray-600 hover:bg-gray-800 border p-2 rounded-lg flex items-center gap-2"
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
