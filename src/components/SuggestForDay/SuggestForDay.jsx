import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SuggestForDay.module.scss';
import * as moment from 'moment';
import { selectAllActivities } from '../../features/activities/activitiesSlice';
import { selectAllTasks } from '../../features/task/taskSlice';
import filterTime from './utils';

export default function SuggestForDay({ listSuggest = [] }) {
  //   console.log(listSuggest);
  const listActivities = useSelector(selectAllActivities);
  //   console.log(listActivities);
  const time = moment(listActivities.from).format('HH:MM A');
  const listTasks = useSelector(selectAllTasks);
  //   console.log(listTasks);

  function compare(a, b) {
    return (
      new Date(a).getDate() === new Date(b).getDate() &&
      new Date(a).getMonth() === new Date(b).getMonth() &&
      new Date(a).getFullYear() === new Date(b).getFullYear()
    );
  }

  function suggest() {
    const filterdBusyTimeByPeriod = filterTime(
      new Date(),
      listTasks.map((task) => task.time),
      'ít hơn 1 giờ',
      ['Cả ngày'],
      'Cả tuần'
    );
    const list = [];
    // console.log(filterdBusyTimeByPeriod);
    for (let i = 0; i < filterdBusyTimeByPeriod.length; i++) {
      for (let j = 0; j < listActivities.length; j++) {
        if (
          compare(listActivities[j].date, filterdBusyTimeByPeriod[i].from) &&
          listActivities[j].from > filterdBusyTimeByPeriod[i].from &&
          listActivities[j].to < filterdBusyTimeByPeriod[i].to
        ) {
          list.push(listActivities[j]);
        }
      }
    }
    return list;
  }

  const list = suggest();

  return (
    <div className={styles.container}>
      {list.map((suggest) => {
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
