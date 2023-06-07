import { Link } from "react-router-dom";
import signUp from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { createUser, updateUserProfile } = useContext(AuthContext);

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				console.log(result.user);
				updateUserProfile(data.name, data.photURL)
					.then(() => {
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
												<span>Account created successfully!</span>
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
									<span className="label-text text-white">
										Confirm Password
									</span>
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
