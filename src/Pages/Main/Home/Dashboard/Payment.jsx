import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("");

const Payment = () => {
	return (
		<div>
			<h1>Pay Here</h1>
			<Elements stripe={stripePromise}>
				<CheckOutFrom></CheckOutFrom>
			</Elements>
		</div>
	);
};

export default Payment;
