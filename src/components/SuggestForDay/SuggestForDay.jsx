import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SuggestForDay.module.scss';
import * as moment from 'moment';
import { selectAllActivities } from '../../features/activities/activitiesSlice';

export default function SuggestForDay({ listSuggest = [] }) {
  //   console.log(listSuggest);
  const listActivities = useSelector(selectAllActivities).listActivities;
  console.log(listActivities);
  const time = moment(listActivities.from).format('HH:MM A');
  //   const listWork = [{
  //     title: 'Giờ Trái Đất',
  //     content: 'Tiết kiệm năng lượng',
  //     timeMin: 60,
  //   },
  //   {
  //     title: 'Sắp xếp đồ',
  //     content: 'Mang đi từ thiện những đồ không dùng đến',
  //     timeMin: 30,
  //   },
  //   {
  //     title: 'Dọn dẹp, phân loại',
  //     content: 'Tạo môi trường sống xanh, sạch, đẹp và phân loại các loại rác thải',
  //     timeMin: 60,
  //   },
  //   {
  //     title: 'Tái chế',
  //     content: 'Tạo ra các vật dụng tái chế, hạn chế rác thải, tiết kiệm kinh phí',
  //     timeMin: 90,
  //   },
  //   {
  //     title: '',
  //   }
  // ];

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
