import ResultCard from "./components/ResultCard/ResultCard";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import CenteredModal from "../../components/CenteredModal/CenteredModal";

import "./ItemPage.scss";
import { useState } from "react";
import AddItemModal from "./components/AddItemModal/AddItemModal";

export default function ItemPage() {
	const [isAddItemModalVisible, setAddItemModalVisible] = useState(false);

	return (
		<div className="item-page-container">
			<div className="button-group">
				<PrimaryButton
					title="Add items"
					onClick={() => setAddItemModalVisible(true)}
				/>
			</div>
			<div className="result-group">
				<ResultCard title={"The emission of CO2"}>
					<div className="co2-emission">
						<p className="number">500g</p>
						<p className="unit">CO2</p>
					</div>
				</ResultCard>
			</div>
			<CenteredModal
				isOpen={isAddItemModalVisible}
				onClose={() => setAddItemModalVisible(false)}
			>
				<AddItemModal />
			</CenteredModal>
		</div>
	);
}
