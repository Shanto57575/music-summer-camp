import Activities from "../../Actvities/Activities";
import PopularClasses from "../../Popular/PopularClasses";
import PopularInstructor from "../../Popular/PopularInstructor";
import Banner from "./Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<PopularInstructor></PopularInstructor>
			<Activities></Activities>
		</div>
	);
};

export default Home;
