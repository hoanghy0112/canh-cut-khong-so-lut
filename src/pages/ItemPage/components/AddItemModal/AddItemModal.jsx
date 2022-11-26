import "./AddItemModal.scss";

import ITEM_LIST from "../../../../constants/ITEM_LIST";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
	addOneItem,
	removeItem,
	removeOneItem,
	selectNotZeroItems,
} from "../../../../features/item/itemSlice";

export default function AddItemModal({ closeFunc = () => {} }) {
	const dispatch = useDispatch();
	const notZeroItems = useSelector(selectNotZeroItems);

	function handleAddOneItem(title) {
		dispatch(addOneItem({ title }));
	}

	function handleRemoveOneItem(title) {
		dispatch(removeOneItem({ title }));
	}

	function handleRemoveItem(title) {
		dispatch(removeItem({ title }));
	}

	return (
		<div className="add-item-modal-container">
			<p className="title">Vật dụng đã dùng trong ngày hôm nay của bạn</p>
			<div className="choosing">
				<div className="item-container">
					<p className="title">Vật dụng đã dùng </p>
					<div className="item-list">
						{notZeroItems.map((item) => (
							<div className="item-wrapper">
								<div
									className="item"
									onClick={() => handleRemoveItem(item.title)}
								>
									<img src={item.image} alt={item.title} />
								</div>
								<div className="item-tool">
									<button
										onClick={() => handleRemoveOneItem(item.title)}
									>
										-
									</button>
									<p>{item.quantity}</p>
									<button onClick={() => handleAddOneItem(item.title)}>
										+
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="item-container">
					<p className="title">Thêm vật dụng </p>
					<div className="item-list">
						{ITEM_LIST.map((item) => (
							<div className="item-wrapper">
								<div
									onClick={() => handleAddOneItem(item.title)}
									className="item disable"
								>
									<img src={item.image} alt={item.title} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<PrimaryButton onClick={closeFunc} title="Submit" />
		</div>
	);
}
