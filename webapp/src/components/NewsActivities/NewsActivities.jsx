import styles from "./NewsActivities.module.scss";

import * as moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
	addMyActivities,
	selectAllActivities,
} from "../../features/activities/activitiesSlice";
import { addScore } from "../../features/score/scoreSlice";

const NewsActivities = () => {
	const dispatch = useDispatch();
	const news = useSelector(selectAllActivities);

	function handleClick(data) {
		alert('Bạn đã đăng ký sự kiện này')
		dispatch(addScore(data.score));
		dispatch(addMyActivities(data));
	}

	return (
		<>
			{news &&
				news.length > 0 &&
				news.map((data) => {
					return (
						<div className={styles.container}>
							<div className={styles.header}>
								<div className={styles.title}>{data.title}</div>
								<div className={styles.date}>
									{moment(data.date).format("DD/MM/YYYY")}
								</div>
							</div>
							<div className={styles.time}>
								{moment(data.from).format("HH:mm")}-
								{moment(data.to).format("HH:mm")}
							</div>
							<div className={styles.time}>Score: {data.score}</div>
							<div className={styles.organization}>
								{data.organization}
							</div>
							<div className={styles.content}>{data.content}</div>
							<div className={styles.thumbnail}>
								<img src={data.thumbnail}></img>
							</div>
							<div
								className={styles.join}
								onClick={() => handleClick(data)}
							>
								Join
							</div>
						</div>
					);
				})}
		</>
	);
};

export default NewsActivities;
