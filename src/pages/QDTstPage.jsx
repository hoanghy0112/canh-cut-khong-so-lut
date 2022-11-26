import NewsActivities from "../components/NewsActivities/NewsActivities"
import { useSelector } from "react-redux"
import { selectAllTasks } from "../features/task/taskSlice"

const QDTestPage = () => {
    const tasks = useSelector(selectAllTasks)
    console.log(tasks)
    return (
        <NewsActivities/>
    )
}

export default QDTestPage
