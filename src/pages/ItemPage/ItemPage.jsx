import ResultCard from "./components/ResultCard/ResultCard";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import CenteredModal from "../../components/CenteredModal/CenteredModal";

import "./ItemPage.scss";
import { useState } from "react";
import AddItemModal from "./components/AddItemModal/AddItemModal";
import Chart from "../../components/Chart/Chart";

const data = [
	{ name: "Bag", weight: 12 },
	{ name: "Bottle", weight: 5 },
	{ name: "Straw", weight: 6 },
	{ name: "Cup", weight: 1 },
];

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
				<div className="left-side">
					<ResultCard title={"The emission of CO2"}>
						<div className="co2-emission">
							<div>
								<p className="number">500g</p>
								<p className="unit">CO2</p>
							</div>
						</div>
					</ResultCard>
					<ResultCard title={"The emission of CO2"}>
						<Chart data={data} />
					</ResultCard>
				</div>
				<div className="right-side">
					<ResultCard title={"Garbage"}></ResultCard>
				</div>
			</div>
			<CenteredModal
				isOpen={isAddItemModalVisible}
				onClose={() => setAddItemModalVisible(false)}
			>
				<AddItemModal closeFunc={() => setAddItemModalVisible(false)} />
			</CenteredModal>
		</div>
	);
}
