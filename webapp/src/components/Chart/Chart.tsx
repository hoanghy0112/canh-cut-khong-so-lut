import React, { useEffect, useState } from "react";
import "./Chart.scss";

interface IChartData {
	title: string;
	quantity: number;
	threshold?: number | null;
}

interface IProps {
	data: IChartData[];
}

export default function Chart({ data }: IProps) {
	const [chartData, setChartData] = useState<IChartData[]>([]);

	useEffect(() => {
		const maxWeight = data.reduce(
			(maxValue, value) =>
				maxValue > value.quantity ? maxValue : value.quantity,
			data?.[0]?.quantity
		);

		setChartData(
			data.map(({ title, quantity }) => ({
				title,
				quantity,
				threshold: quantity / maxWeight,
			}))
		);
	}, [data]);

	return (
		<div className="chart">
			{chartData.map(({ title, quantity, threshold }) => (
				<div key={title} className="bar">
					<div
						className="title"
						style={{
							color: threshold == 1 ? "#259e73" : "#9291A5",
						}}
					>
						<p>{title}</p>
						<p>{quantity}</p>
					</div>
					<div
						className="progress"
						style={{
							width: `${(threshold || 0) * 220}px`,
							backgroundColor: threshold == 1 ? "#259e73" : "#9291A5",
						}}
					/>
				</div>
			))}
		</div>
	);
}
