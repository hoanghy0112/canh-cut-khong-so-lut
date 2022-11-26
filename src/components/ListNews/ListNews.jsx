import styles from './ListNews.module.scss'
import NewsActivities from '../NewsActivities/NewsActivities'

const ListNews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Activities</div>
            <NewsActivities/>
        </div>
    )
}

export default ListNews