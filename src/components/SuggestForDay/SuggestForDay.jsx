import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SuggestForDay.module.scss';
import * as moment from 'moment';
import { selectAllActivities } from '../../features/activities/activitiesSlice';
import { selectAllTasks } from '../../features/task/taskSlice';

export default function SuggestForDay({ listSuggest = [] }) {
  //   console.log(listSuggest);
  const listActivities = useSelector(selectAllActivities).listActivities;
  //   console.log(listActivities);
  const time = moment(listActivities.from).format('HH:MM A');
  const listTasks = useSelector(selectAllTasks);
  console.log(listTasks);

  return (
    <div className={styles.container}>
      {listActivities.map((suggest) => {
        return (
          <div className={styles.suggest}>
            <div className={styles.textContainer}>
              <div className={styles.title}>{suggest.title}</div>
            </div>
            <div className={styles.time}>
              {moment(suggest.from).format('HH:MM')}
            </div>
          </div>
        );
      })}
    </div>
  );
}
