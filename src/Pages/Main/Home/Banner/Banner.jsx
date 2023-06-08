import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://img.freepik.com/free-photo/friends-sitting-near-bonfire-smiling-playing-guitar-camping-grill-marshmallow_176420-4167.jpg?size=626&ext=jpg&ga=GA1.2.916577174.1686076179&semt=ais"
					className="w-full brightness-50 lg:opacity-60"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a className="text-white text-2xl" href="#slide4">
						❮
					</a>
					<a className="text-white text-2xl" href="#slide2">
						❯
					</a>
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-32 lg:top-60">
					<div className="font-serif text-white ml-12 space-y-1 lg:space-y-3">
						<h3 className="lg:text-xl">Welcome to, </h3>
						<h1 className="lg:text-5xl font-bold text-gray-200">
							MelodicMuse,
						</h1>
						<h3 className="lg:text-xl">Where, </h3>
						<div className="text-lime-200 font-extrabold lg:text-3xl">
							......
							<Typewriter
								words={[
									"Harmonies Unfold!",
									"Techniques Evolve!",
									"Melodies Resonate!",
									"Symphony Begins!",
								]}
								loop={0}
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</div>
						<button
							type="button"
							className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							Get Started
						</button>
					</div>
					<div className="hidden lg:block">
						<img
							src="https://plus.unsplash.com/premium_photo-1661497823751-b0365ea0e895?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lciUyMG11c2ljJTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="relative w-96 right-10 rounded-xl"
						/>
						<img
							src="https://images.unsplash.com/photo-1518190171695-bbbb69c4a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwbXVzaWMlMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
							alt=""
							className="absolute top-40 right-40 w-96 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/1158215709/photo/young-group-of-people-taking-a-photo-together-on-a-music-festival.jpg?s=612x612&w=0&k=20&c=VmPMXMi6hQnMGpCP6JpTqP_YhZqLRdxygghnbxDLGz4="
							alt=""
							className="absolute top-80 right-96 w-96 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/823291888/photo/rocking-the-mic.jpg?s=612x612&w=0&k=20&c=xrDu4r3ASkDz_hZ2mnnZpy3aR_oIqUM5PctwgvbJdVk="
							alt=""
							className="absolute top-[450px] right-[700px] w-96 rounded-xl"
						/>
					</div>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img
					src="https://media.istockphoto.com/id/1420487329/photo/calm-summer-afternoon-with-friends-by-the-lake.jpg?s=612x612&w=0&k=20&c=DAchXRR_23sOV52i9cOB-9LZTgNJa9k12Sz6HkjWEpc="
					className="w-full brightness-50 lg:opacity-60"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a className="text-white text-2xl" href="#slide1">
						❮
					</a>
					<a className="text-white text-2xl" href="#slide3">
						❯
					</a>
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-32 lg:top-60">
					<div className="font-serif text-white  ml-12 space-y-1 lg:space-y-3">
						<h3 className="lg:text-xl">Welcome to, </h3>
						<h1 className="lg:text-5xl font-bold text-gray-200">MelodicMuse</h1>
						<h3 className="lg:text-xl">Where, </h3>
						<div className="text-lime-200 font-extrabold lg:text-3xl">
							......
							<Typewriter
								words={[
									"Harmonies Unfold!",
									"Techniques Evolve!",
									"Melodies Resonate!",
									"Symphony Begins!",
								]}
								loop={0}
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</div>

						<button
							type="button"
							className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							Get Started
						</button>
					</div>
					<div className="hidden lg:block">
						<img
							src="https://media.istockphoto.com/id/515484964/photo/friends-around-the-campfire.jpg?s=612x612&w=0&k=20&c=d_GT5ZPxZ1okQOwzqZ6HQKgMJp4Jg6SxUZpO77TmE5k="
							alt=""
							className="relative w-96 right-20 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/1420487329/photo/calm-summer-afternoon-with-friends-by-the-lake.jpg?s=612x612&w=0&k=20&c=DAchXRR_23sOV52i9cOB-9LZTgNJa9k12Sz6HkjWEpc="
							alt=""
							className="absolute top-36 right-60 w-96 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/1326032226/photo/shot-of-a-group-of-teenagers-playing-musical-instruments-in-nature-at-summer-camp.jpg?s=612x612&w=0&k=20&c=efUdsdilDmIJ62nNO8TJF3fgPxyKv4YG0Fzb0d4ImnA="
							alt=""
							className="absolute right-[430px] w-96 top-60 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/920479664/photo/teenagers-playing-violins-in-concert-focus-on-boy.jpg?s=612x612&w=0&k=20&c=FfGEv_uG8IXkVa71OBncrkyJm8egBORqpA1fv4NkqP4="
							alt=""
							className="absolute top-[450px] right-[700px] w-96 rounded-xl"
						/>
					</div>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img
					src="https://img.freepik.com/free-photo/friends-sitting-near-bonfire-smiling-embracing-resting-playing-guitar_176420-4178.jpg?size=626&ext=jpg&ga=GA1.1.916577174.1686076179&semt=ais"
					className="w-full brightness-50 lg:opacity-60"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a className="text-white text-2xl" href="#slide2">
						❮
					</a>
					<a className="text-white text-2xl" href="#slide4">
						❯
					</a>
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-32 lg:top-60">
					<div className="font-serif text-white  ml-12 space-y-1 lg:space-y-3">
						<h3 className="lg:text-xl">Welcome to, </h3>
						<h1 className="lg:text-5xl font-bold text-gray-200">MelodicMuse</h1>
						<h3 className="lg:text-xl">Where, </h3>
						<div className="text-lime-200 font-extrabold lg:text-3xl">
							......
							<Typewriter
								words={[
									"Harmonies Unfold!",
									"Techniques Evolve!",
									"Melodies Resonate!",
									"Symphony Begins!",
								]}
								loop={0}
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</div>

						<button
							type="button"
							className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							Get Started
						</button>
					</div>
					<div className="hidden lg:block">
						<img
							src="https://media.istockphoto.com/id/986367654/photo/young-happy-friends-enjoying-in-their-gathering-on-a-penthouse-terrace.jpg?s=612x612&w=0&k=20&c=dM-ymLZYgONjGa1pc9KGbvUdhkbvWNZOpJ_Ftuuz3FA="
							alt=""
							className="relative w-96 right-20 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/1392991311/photo/man-with-short-brown-hair-and-beard-wearing-a-hat-playing-acoustic-guitar-for-his-friends-all.jpg?s=612x612&w=0&k=20&c=cG7IMBMcyvRjPE-JlgLlL85cKphYH4IzIwfKrfBW3ng="
							alt=""
							className="absolute top-36 right-64 w-96 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/1453325958/photo/man-watching-street-musicians.jpg?s=612x612&w=0&k=20&c=iCvSVn7XsyFVD2rfZq0DoeGfsc3bGmMGHHpvd8lvHWI="
							alt=""
							className="absolute right-[530px] w-96 top-60 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/506016956/photo/jazz-band-performing-at-a-nightclub.jpg?s=612x612&w=0&k=20&c=6sXKyh9uf34OeOq_pC6tnq8zBgwCFsL_AMzzZ9bKCac="
							alt=""
							className="absolute top-[450px] right-[700px] w-96 rounded-xl"
						/>
					</div>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img
					src="https://media.istockphoto.com/id/1004010124/photo/classical-acoustic-guitar-on-a-stool-vintage.jpg?s=612x612&w=0&k=20&c=Ob7DEezd2mduRJ0WgaEf6SuvS9JhH46ACWubwHP2IfM="
					className="w-full brightness-50 lg:opacity-60"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a className="text-white text-2xl" href="#slide3">
						❮
					</a>
					<a className="text-white text-2xl" href="#slide1">
						❯
					</a>
				</div>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-32 lg:top-60">
					<div className="font-serif text-white  ml-12 space-y-1 lg:space-y-3">
						<h3 className="lg:text-xl">Welcome to, </h3>
						<h1 className="lg:text-5xl font-bold shadow-2xl">MelodicMuse</h1>
						<h3 className="lg:text-xl">Where, </h3>
						<div className="text-lime-200 font-extrabold lg:text-3xl">
							......
							<Typewriter
								words={[
									"Harmonies Unfold!",
									"Techniques Evolve!",
									"Melodies Resonate!",
									"Symphony Begins!",
								]}
								loop={0}
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</div>

						<button
							type="button"
							className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							Get Started
						</button>
					</div>
					<div className="hidden lg:block">
						<img
							src="https://media.istockphoto.com/id/1417227657/photo/girlfriends-setting-up-a-small-picnic-area-for-a-leisurely-garden-party.jpg?s=612x612&w=0&k=20&c=W_MyLK3aVsoeWz8Tgs9-tifOHFeJ5l7jlqTHbbgCz5g="
							alt=""
							className="relative w-96 right-20 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/517269488/photo/hipster-multi-ethnic-group-play-guitar-at-beach.jpg?s=612x612&w=0&k=20&c=xEnMN2llKU7qDQHYXaHkl2SqU0g-csQniF2jSLBZ5PI="
							alt=""
							className="absolute top-32 right-64 w-96 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/986367654/photo/young-happy-friends-enjoying-in-their-gathering-on-a-penthouse-terrace.jpg?s=612x612&w=0&k=20&c=dM-ymLZYgONjGa1pc9KGbvUdhkbvWNZOpJ_Ftuuz3FA="
							alt=""
							className="absolute right-[530px] w-96 top-64 rounded-xl"
						/>
						<img
							src="https://media.istockphoto.com/id/921626264/photo/feeling-the-rhythm-in-the-drums.jpg?s=612x612&w=0&k=20&c=fm0864hKkPBVPNJMvEIGEmIAr2QKsWZ_axyDaNhtoGk="
							alt=""
							className="absolute top-[450px] right-[700px] w-96 rounded-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
