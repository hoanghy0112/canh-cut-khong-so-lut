import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./AccumulatedPoint.scss";
import VoucherCard from "./VoucherCard/VoucherCard";

const voucherList = [
	{
		name: "Giảm 50% tối đa 10k tại The Coffee House",
		description: "Áp dụng cho sinh viên UIT",
	},
];

export default function AccumulatedPoint() {
	return (
		<div className="accumulated-point">
			<div className="button-group">
				<h2>
					Your accumulated point <span>5</span>{" "}
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
