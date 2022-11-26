import ResultCard from "./components/ResultCard/ResultCard";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import CenteredModal from "../../components/CenteredModal/CenteredModal";

import "./ItemPage.scss";
import { useMemo, useState } from "react";
import AddItemModal from "./components/AddItemModal/AddItemModal";
import Chart from "../../components/Chart/Chart";
import { useSelector } from "react-redux";
import { selectNotZeroItems } from "../../features/item/itemSlice";

const suggestionMessage = [
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
	"Bạn có thể sử dụng chai thủy tinh để tái sử dụng nhiều lần",
];

export default function ItemPage() {
	const [isAddItemModalVisible, setAddItemModalVisible] = useState(false);
	const notZeroItems = useSelector(selectNotZeroItems);

	const suggestionMessage = useMemo(() => {
		const messageList = [];

		if (
			notZeroItems.indexOf(
				notZeroItems.find((item) => item.title === "Plastic bottle")
			) !== -1
		) {
			messageList.push({
				message:
					"Bạn có thể thay thế chai nhựa bằng chai thủy tinh và tái sử dụng nhiều lần",
			});
		}

		if (
			notZeroItems.indexOf(
				notZeroItems.find((item) => item.title === "Plastic bag")
			) !== -1
		) {
			messageList.push({
				message:
					"Bạn có thể tái sử dụng túi nilong cho nhiều mục đích khác nhau, điều này sẽ giúp giảm thiểu lượng túi nilong đã thải ra môi trường",
			});
		}

		if (
			notZeroItems.indexOf(
				notZeroItems.find((item) => item.title === "Plastic straw")
			) !== -1
		) {
			messageList.push({
				message:
					"ống hút giấy tuy nhỏ nhưng việc sử dụng ống hút nhựa bừa bãi sẽ gây ra hậu quả rất lớn",
			});
		}

		if (
			notZeroItems.indexOf(
				notZeroItems.find((item) => item.title === "Plastic cup")
			) !== -1
		) {
			messageList.push({
				message:
					"Cốc giấy là một trong những nguồn gây ô nhiễm lớn nhất cho môi trường vì vậy cần sử dụng hợp lý và hạn chế",
			});
		}

		return messageList;
	}, [notZeroItems]);

	return (
		<div className="item-page-container">
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
					<ResultCard title={"Quantity of garbage today"}>
						<Chart data={notZeroItems} />
					</ResultCard>
				</div>
				<div className="right-side">
					<ResultCard title={"Garbage"}>
						<div className="item-container">
							{notZeroItems.map((item) => (
								<div className="item-wrapper">
									<div
										className="item disable"
										onClick={() => handleRemoveItem(item.title)}
									>
										<img src={item.image} alt={item.title} />
									</div>
									<div className="item-tool">
										<p>{item.quantity}</p>
									</div>
								</div>
							))}
							<PrimaryButton
								title="Add items"
								onClick={() => setAddItemModalVisible(true)}
							/>
						</div>
					</ResultCard>
					<ResultCard title="Suggestion for you">
						<div className="suggestion">
							{suggestionMessage.map((suggestion) => (
								<div className="suggestion-item">
									{suggestion.message}
								</div>
							))}
						</div>
					</ResultCard>
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
