import { Link } from "react-router-dom";
import signUp from "../../assets/login.png";
import { useForm } from "react-hook-form";
const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="h-full bg-base-200 text-white">
			<div className="lg:flex w-full">
				<div className="text-center lg:w-1/2">
					<img src={signUp} className="animate-pulse hidden lg:block" />
				</div>
				<div className="card flex-shrink-0 lg:max-w-lg shadow-2xl bg-white lg:w-1/2">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<h1 className="text-xl font-serif font-bold text-center">
							Login Here
						</h1>
						<div className="flex gap-3">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Name</span>
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
						</div>
						<div className="flex gap-3">
							<div className="form-control w-full">
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
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<input
									{...register("confirm", { required: true })}
									type="password"
									placeholder="Confirm password"
									className="input input-bordered"
								/>
								{errors.confirm && (
									<span className="text-red-600 mt-3 font-bold">
										Password confirmation is required
									</span>
								)}
							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
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
							<input type="submit" className="btn" value="Create an Account" />
						</div>
						<p className="text-black">
							Already have an account?
							<Link
								to="/login"
								className="link link-primary text-purple-700 hover:text-red-500"
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
