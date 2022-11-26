import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SuggestForDay.module.scss';
import * as moment from 'moment';
import { selectAllActivities } from '../../features/activities/activitiesSlice';
import { selectAllTasks } from '../../features/task/taskSlice';
import filterTime from './utils';

export default function SuggestForDay() {
  //   console.log(listSuggest);
  const listActivities = useSelector(selectAllActivities);
  //   console.log(listActivities);
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
    let a = [];
    const filterdBusyTimeByPeriod = filterTime(
      new Date(),
      listTasks.map((task) => task.time),
      'ít hơn 1 giờ',
      ['Cả ngày'],
      'Cả tuần'
    );
    // console.log(filterdBusyTimeByPeriod);
    for (let i = 0; i < filterdBusyTimeByPeriod.length; i++) {
      for (let j = 0; j < listActivities.length; j++) {
        if (
          compare(listActivities[j].date, filterdBusyTimeByPeriod[i].from) &&
          new Date(listActivities[j].from) >
            new Date(filterdBusyTimeByPeriod[i].from) &&
          new Date(listActivities[j].to) <
            new Date(filterdBusyTimeByPeriod[i].to)
        ) {
          a.push(listActivities[j]);
        }
      }
    }
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (new Date(a[i].from).getTime() > new Date(a[j].from).getTime()) {
          let temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        }
      }
    }
    return a;
  }

  const list = suggest();
  console.log(list);

  return (
    <div className={styles.container}>
      {list.map((suggest) => {
        return (
          <div className={styles.suggest}>
            <div className={styles.textContainer}>
              <div className={styles.title}>{suggest.title}</div>
            </div>
            {/* <div className={styles.date}>{</div> */}
            <div className={styles.time}>
              {`${moment(suggest.from).format('DD/MM/YYYY HH:mm')} - ${moment(
                suggest.to
              ).format('HH:mm')}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
