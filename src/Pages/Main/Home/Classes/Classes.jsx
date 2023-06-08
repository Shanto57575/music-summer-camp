import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Classes = () => {
	useEffect(() => {
		Aos.init({ duration: 100 });
	}, []);
	return (
		<>
			<h1 className="text-center my-7 font-bold lg:text-5xls">
				Sizzling Summer Melodies
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 my-10">
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/0ykv9kzk/12.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/0QTxv7wF/3.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/ZqD4fGKT/6.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/DwnvmQMK/4.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/nc8cffKr/1.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/qRh0W1z2/7.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/d00JjsFH/5.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/dt8QqNnB/2.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/5Nq1cYNK/11.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/05SPfHgs/9.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/8PVDnBDr/10.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
				<img
					data-aos="flip-up"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
					src="https://i.postimg.cc/13B9FgkV/8.jpg"
					className="h-full lg:h-[270px] brightness-75 rounded-lg w-full lg:w-96"
				/>
			</div>
		</>
	);
};

export default Classes;
