import styles from "./SuggestionPage.module.scss";
import NewsActivities from "../../components/NewsActivities/NewsActivities";
import ListNews from "../../components/ListNews/ListNews";
import SuggestForDay from "../../components/SuggestForDay/SuggestForDay";
import { useSelector } from "react-redux";
import { selectMyActivities } from "../../features/activities/activitiesSlice";
import moment from "moment/moment";

const SuggestionPage = () => {
	const myActivities = useSelector(selectMyActivities);

	return (
		<div className={styles.container}>
			<div className={styles.suggestContainer}>
				<div className={styles.title}>
					<p className={styles.text}>The best for you</p>
				</div>
				<div className={styles.suggest}>
					<SuggestForDay />
				</div>
				<div className={styles.title}>
					<p className={styles.text}>Your activities</p>
				</div>
				<div className={styles.suggest}>
					{myActivities.map(({ title, score, from, to }) => (
						<div className={styles.activity}>
							<p>
								{title}
								<span> +{score} score</span>
							</p>
							<p>
								{`${moment(from).format("DD/MM/YYYY HH:mm")} - ${moment(
									to
								).format("HH:mm")}`}
							</p>
						</div>
					))}
				</div>
			</div>
			<ListNews />
		</div>
	);
};

export default SuggestionPage;
