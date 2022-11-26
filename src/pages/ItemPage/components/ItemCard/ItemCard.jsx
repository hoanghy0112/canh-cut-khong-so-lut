import "./ItemCard.scss";

export default function ItemCard({ title, image }) {
	return (
		<div className="item-card-container">
			<img src={image} alt={title} />
		</div>
	);
}
