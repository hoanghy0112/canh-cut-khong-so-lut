import React from 'react';
import './DateItem.scss';

import PropTypes from 'prop-types';

export default function DateItem({ date }) {
  const isThisDay =
    date.toLocaleDateString() === new Date().toLocaleDateString();

  return (
    <div className="date-item__container">
      <div className={`day-container ${isThisDay && 'thisDay'}`}>
        <p className="day-text">{date.getDate()}</p>
      </div>
      <div className="weekday-container">
        <p className="weekday-text">
          {date
            .toLocaleDateString(undefined, { weekday: 'short' })
            .toUpperCase()}
        </p>
      </div>
    </div>
  );
}

DateItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
