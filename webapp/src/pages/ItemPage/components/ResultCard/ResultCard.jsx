import "./ResultCard.scss";

export default function ResultCard({ title, children }) {
	return (
		<div className="result-card-container">
			<p className="title">{title}</p>
			<div className="inner-card">{children}</div>
		</div>
	);
}
