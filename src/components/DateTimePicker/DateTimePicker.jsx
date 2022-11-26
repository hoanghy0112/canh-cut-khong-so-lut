/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import { DayPicker } from 'react-day-picker';

import { ICON_CALENDAR_2 } from '../../assets/icons';

import styles from './DateTimePicker.module.scss';

import 'react-day-picker/dist/style.css';

export default function DateTimePicker({ startDay, hanldeChangeStartDay }) {
  const [isOpenDateTimePicker, setIsOpenDateTimePicker] = useState(false);
  const [selected, setSelected] = useState(startDay);

  useEffect(() => {
    if (!selected) hanldeChangeStartDay(new Date());
    else hanldeChangeStartDay(selected);
  }, [selected]);

  function formatDay(date) {
    const month = date.getMonth() + 1;
    const weekday = date.getDay();
    const day = date.getDate();
    return `${
      weekday !== 0 ? `Thứ ${weekday + 1}` : 'Chủ nhật'
    }, Ngày ${day} Tháng ${month}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles['date-time-picker-container']}>
        <div className={styles['selected-month']}>{formatDay(selected)}</div>
        <div
          onClick={() => setIsOpenDateTimePicker(!isOpenDateTimePicker)}
          className={styles['date-time-picker-logo']}
        >
          <img src={ICON_CALENDAR_2} alt='Calendar' />
        </div>
      </div>
      {isOpenDateTimePicker && (
        <div className={styles['date-time-picker']}>
          <DayPicker mode='single' selected={selected} onSelect={setSelected} />
        </div>
      )}
    </div>
  );
}
