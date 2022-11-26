import styles from "./NewsActivities.module.scss";

import * as moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
	addMyActivities,
	selectAllActivities,
	selectMyActivities,
} from "../../features/activities/activitiesSlice";
import { addScore } from "../../features/score/scoreSlice";

import { ICON_LEAF } from "../../assets/icons";
import useNotifyIsOpenModal from "../../hooks/useNotifyIsOpenModal";
import NotifyModal from "../NotifyModal/NotifyModal";

const NewsActivities = () => {
	const dispatch = useDispatch();
	const [isOpen, openNotify] = useNotifyIsOpenModal();
	const news = useSelector(selectAllActivities);
	const myActivities = useSelector(selectMyActivities);

	function handleClick(data) {
		if (
			myActivities.indexOf(
				myActivities.find((act) => act.title == data.title)
			) !== -1
		) {
			dispatch(addScore(data.score));
			openNotify();
			dispatch(addMyActivities(data));
		}
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
							<div className={styles.time}>
								Score: {data.score} <ICON_LEAF color="green" />
							</div>
							<div className={styles.organization}>
								{data.organization}
							</div>
							<div className={styles.content}>{data.content}</div>
							<div className={styles.thumbnail}>
								<img src={data.thumbnail}></img>
							</div>
							<div
								className={[styles.join, styles.disabled].join(" ")}
								style={{}}
								onClick={() => handleClick(data)}
								disabled
							>
								Join
							</div>
						</div>
					);
				})}
			<NotifyModal
				title="Bạn đã đăng ký tham gia sự kiện này"
				isOpen={isOpen}
			></NotifyModal>
		</>
	);
};

export default NewsActivities;
