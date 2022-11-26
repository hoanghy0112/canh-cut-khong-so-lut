import styles from './SuggestionPage.module.scss'
import NewsActivities from '../../components/NewsActivities/NewsActivities'
import ListNews from '../../components/ListNews/ListNews'

const SuggestionPage = () => {
    return (
        <div className={styles.container}>
            <ListNews/>
        </div>
    )
}

export default SuggestionPage