import { Flip, Roll, Rotate, Zoom } from "react-awesome-reveal";

const Activities = () => {
	return (
		<>
			<h1 className="text-center my-20 text-3xl font-bold text-cyan-500">
				Musical Medley: Diving into Diverse Music Activities
			</h1>
			<Zoom>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="grid gap-4">
						<Rotate>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1457636135/photo/young-curly-woman-singing-with-a-guitarist-man-in-the-street.jpg?s=612x612&w=0&k=20&c=r___fHdJ6qRpcQQfx2KJ8k4lF-_7Z6xlgkAhvjvqivo="
									alt=""
								/>
							</div>
						</Rotate>
						<Rotate>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/941495764/photo/first-guitar-class.jpg?s=612x612&w=0&k=20&c=0Bunv-SVVloFbU6LlRKTf-oTaew1fXRNvuaxul0C0Tw="
									alt=""
								/>
							</div>
						</Rotate>
						<Flip>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1492523027/photo/woman-playing-on-guitar-around-the-fire-outdoor.jpg?s=612x612&w=0&k=20&c=u9qO_An6k5ZrxBY7-oszVcKyYy7vnh5naiQW8nUrAME="
									alt=""
								/>
							</div>
						</Flip>
					</div>
					<div className="grid gap-4">
						<Roll>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1417422013/photo/music-teacher-explaining-difficult-piece-part-to-guitar-and-clarinet-students.jpg?s=612x612&w=0&k=20&c=SgSZDU-CsQbdQJEiYen2mQhGFjmEFaRGcB_wPkWy-8c="
									alt=""
								/>
							</div>
						</Roll>
						<Rotate>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1460463950/photo/people-playing-flutes-at-an-irish-traditional-music-session-at-a-pub-in-northern-ireland.jpg?s=612x612&w=0&k=20&c=U3LwRTL6vYd6mp1ftneCu8q7RrZT7dECnxgQlct-7kc="
									alt=""
								/>
							</div>
						</Rotate>
						<Zoom>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1478027867/photo/man-writing-and-composing-at-the-studio.jpg?s=612x612&w=0&k=20&c=4fg_Do20YT6ng5M-kh7U6kithchnBVwihyNA8ZXL0c0="
									alt=""
								/>
							</div>
						</Zoom>
					</div>
					<div className="grid gap-4">
						<Flip>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1135954788/photo/young-adult-couple-playing-guitar-at-sunset-in-a-tent-on-the-beach.jpg?s=612x612&w=0&k=20&c=_5FHrI_8KmaxLEnTGtI01ifulJBg1MOUyL6uvTMWLbs="
									alt=""
								/>
							</div>
						</Flip>
						<Flip>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1130450624/photo/hispanic-young-man-teaching-mature-caucasian-man-to-play-guitar.jpg?s=612x612&w=0&k=20&c=90yrfBvJRTxiZOp-gD9962NbJlAE9RyOw8pfGg3n4X4="
									alt=""
								/>
							</div>
						</Flip>
						<Flip>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/490338206/photo/conductor-directing-symphony-orchestra.jpg?s=612x612&w=0&k=20&c=qA2Wf4Y6Tmby7MIyTZFn2JPP7eVuf_b9auiTfkqTleE="
									alt=""
								/>
							</div>
						</Flip>
					</div>
					<div className="grid gap-4">
						<Flip>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1319479588/photo/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-full-of-people-watching.jpg?s=612x612&w=0&k=20&c=OrGoVzFYygF904aMkM38N_v53yyBI5D_aWkpZZhTvEY="
									alt=""
								/>
							</div>
						</Flip>
						<Flip>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1439829299/photo/young-couple-sings-by-playing-guitar-on-her-personal-music-channel-on-social-media-in-house.jpg?s=612x612&w=0&k=20&c=KzcPzdqgffCtbb7c2rOCSTDHyZZFDe7JyBkjJY0nL8A="
									alt=""
								/>
							</div>
						</Flip>
						<Rotate>
							<div>
								<img
									className="h-auto max-w-full rounded-lg"
									src="https://media.istockphoto.com/id/1417422617/photo/beginner-guitar-lesson-going-well-for-children.jpg?s=612x612&w=0&k=20&c=YWVXnLMqIsFxV0nSo89de0zdZGrg1wzys_FxKVikeME="
									alt=""
								/>
							</div>
						</Rotate>
					</div>
				</div>
			</Zoom>
		</>
	);
};

export default Activities;
