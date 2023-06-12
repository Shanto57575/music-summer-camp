import Activities from "../../Actvities/Activities";
import PopularInstructor from "../../Popular/PopularInstructor";
import Banner from "./Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<PopularInstructor></PopularInstructor>
			<Activities></Activities>
		</div>
	);
};

export default Home;
