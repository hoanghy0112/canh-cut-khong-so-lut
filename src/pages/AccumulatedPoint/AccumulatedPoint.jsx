import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./AccumulatedPoint.scss";

export default function AccumulatedPoint() {
	return (
		<div className="accumulated-point">
			<h2>
				Your accumulated point <span>5</span>
			</h2>
			<div className="button-group">
				<PrimaryButton title="Earn more point" />
			</div>
		</div>
	);
}
