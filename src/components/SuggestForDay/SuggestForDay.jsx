import React from 'react';
import styles from './SuggestForDay.module.scss';
import * as moment from 'moment';

export default function SuggestForDay({ listSuggest = [] }) {
  //   console.log(listSuggest);
  const time = moment(listSuggest.time).format('HH:MM A');
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
