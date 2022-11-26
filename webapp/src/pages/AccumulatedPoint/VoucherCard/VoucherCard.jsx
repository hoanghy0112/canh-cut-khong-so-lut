import "./VoucherCard.scss";

import { ICON_VOUCHER } from "../../../assets/icons";

export default function VoucherCard({ name, description }) {
	return (
		<div className="voucher-card">
			<div className="title">
				{/* <img src={ICON_VOUCHER} alt="" /> */}
				<ICON_VOUCHER color="black" />
				<p>{name}</p>
			</div>
			<p>{description}</p>
		</div>
	);
}
