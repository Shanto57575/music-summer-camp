import { Link } from "react-router-dom";
import login from "../../assets/register.png";
import { useForm } from "react-hook-form";

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="hero h-full bg-base-200 text-white">
			<div className="hero-content">
				<div className="text-center">
					<img src={login} className="animate-pulse hidden lg:block" />
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<h1 className="text-xl font-serif font-bold text-center">
							Login Here
						</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
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
								<span className="label-text">Password</span>
							</label>
							<input
								{...register("password", { required: true })}
								type="password"
								placeholder="password"
								className="input input-bordered"
							/>
							{errors.password && (
								<span className="text-red-600 mt-3 font-bold">
									Password is required
								</span>
							)}
						</div>
						<div className="form-control mt-6">
							<input type="submit" className="btn" value="Sign In" />
						</div>
						<p className="text-black">
							New to this site?
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
