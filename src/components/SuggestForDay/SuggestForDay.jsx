import React from 'react';
import styles from './SuggestForDay.module.scss';
import * as moment from 'moment';

export default function SuggestForDay({ listSuggest = [] }) {
  //   console.log(listSuggest);
  const time = moment(listSuggest.time).format('HH:MM A');
  const listWork = [{}];

  return (
    <div className={styles.container}>
      {listSuggest.map((suggest) => {
        return (
          <div className={styles.suggest}>
            <div className={styles.textContainer}>
              <div className={styles.title}>{suggest.title}</div>
              <div className={styles.content}>{suggest.content}</div>
            </div>
            <div className={styles.time}>{time}</div>
          </div>
        );
      })}
    </div>
  );
}
