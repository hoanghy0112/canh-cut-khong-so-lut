import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./AccumulatedPoint.scss";
import VoucherCard from "./VoucherCard/VoucherCard";

import { selectScore } from "../../features/score/scoreSlice";
import { useSelector } from "react-redux";

const voucherList = [
	{
		name: "Giảm 50% tối đa 10k tại The Coffee House",
		description: "Áp dụng cho sinh viên UIT",
	},
];

export default function AccumulatedPoint() {

	const points = useSelector(selectScore)

	return (
		<div className="accumulated-point">
			<div className="button-group">
				<h2>
					Your accumulated point <span>{points}</span>{" "}
				</h2>
				<div>
					<PrimaryButton title="Earn more point" />
				</div>
			</div>
			<div className="voucher-group">
				{voucherList.map(({ name, description }) => (
					<VoucherCard name={name} description={description} />
				))}
			</div>
		</div>
	);
}
