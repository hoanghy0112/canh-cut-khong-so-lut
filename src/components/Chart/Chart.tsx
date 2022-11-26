import React, { useEffect, useState } from "react";
import "./Chart.scss";

interface IChartData {
	name: string;
	weight: number;
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
				maxValue > value.weight ? maxValue : value.weight,
			data?.[0]?.weight
		);

		setChartData(
			data.map(({ name, weight }) => ({
				name,
				weight,
				threshold: weight / maxWeight,
			}))
		);
	}, [data]);

	return (
		<div className="chart">
			{chartData.map(({ name, weight, threshold }) => (
				<div key={name} className="bar">
					<div
						className="title"
						style={{
							color: threshold == 1 ? "#259e73" : "#9291A5",
						}}
					>
						<p>{name}</p>
						<p>{weight}</p>
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
