import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import DateItem from '../DateItem/DateItem';
import TimelineItem from '../TimelineItem/TimelineItem';

import styles from './CalendarBoard.module.scss';

const CalendarBoard = forwardRef(({ startDate, onScroll, children }, ref) => (
  <div className={styles.container}>
    <div className={styles.weekdays}>
      {Array(7)
        .fill('')
        .map((_, index) => {
          const date = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate() - startDate.getDay() + 1,
          );

          date.setDate(date.getDate() + index);
          return <DateItem date={date} />;
        })}
    </div>
    <div className={styles.main} onScroll={onScroll}>
      <div className={styles.timeline}>
        {Array(25)
          .fill()
          .map((_, index) => (
            <TimelineItem time={index} />
          ))}
      </div>
      <div className={styles.task}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  </div>
));

CalendarBoard.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  onScroll: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

CalendarBoard.defaultProps = {
  startDate: new Date(),
  onScroll: () => {},
  children: <div />,
};

export default CalendarBoard;
