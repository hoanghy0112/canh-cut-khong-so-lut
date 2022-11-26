import "./AddItemModal.scss";

import ITEM_LIST from "../../data/itemList";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

export default function AddItemModal() {
	return (
		<div className="add-item-modal-container">
			<p className="title">Vật dụng đã dùng trong ngày hôm nay của bạn</p>
			<div className="choosing">
				<div className="item-container">
					<p className="title">Vật dụng đã dùng </p>
					<div className="item-list">
						{ITEM_LIST.map((item) => (
							<div className="item-wrapper">
								<div className="item">
									<img src={item.image} alt={item.title} />
								</div>
                        <div className="item-tool">
                           <button>-</button>
                           <p>1</p>
                           <button>+</button>
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
								<div className="item">
									<img src={item.image} alt={item.title} />
								</div>
								{/* <p>{item.title}</p> */}
							</div>
						))}
					</div>
				</div>
			</div>
			<PrimaryButton title="Submit" />
		</div>
	);
}
