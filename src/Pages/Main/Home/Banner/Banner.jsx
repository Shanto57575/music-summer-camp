import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

import { Pagination } from "swiper";

const Banner = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper my-10"
		>
			{" "}
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/music-speaker-with-wave-equalizer-frequency-background_1017-32308.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/musical-notes-with-sound-wave-background_1017-32863.jpg?size=626&ext=jpg&ga=GA1.2.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/golden-music-notes-background-design_1017-33910.jpg?size=626&ext=jpg&ga=GA1.2.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/musical-colorful-notes-dark-background_1017-32302.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/musical-notes-with-sound-wave-background_1017-32863.jpg?size=626&ext=jpg&ga=GA1.2.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=country_rows_v1"
					alt=""
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Banner;
