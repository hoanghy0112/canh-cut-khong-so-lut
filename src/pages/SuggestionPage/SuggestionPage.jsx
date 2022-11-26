import styles from './SuggestionPage.module.scss';
import NewsActivities from '../../components/NewsActivities/NewsActivities';
import ListNews from '../../components/ListNews/ListNews';
import SuggestForDay from '../../components/SuggestForDay/SuggestForDay';

const SuggestionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.suggestContainer}>
        <div className={styles.title}>
          <p className={styles.text}>The best for you</p>
        </div>
        <div className={styles.suggest}>
          <SuggestForDay />
        </div>
      </div>
      <ListNews />
    </div>
  );
};

export default SuggestionPage;
