import React from 'react';

import PropTypes from 'prop-types';

import './TimelineItem.scss';

export default function TimelineItem({ time }) {
  return (
    <div className="timeline-item-container">
      <p className="time">
        {`${String(time % 12).padStart(2, '0')} ${time < 12 ? 'AM' : 'PM'}`}
      </p>
      <div className="line" />
    </div>
  );
}

TimelineItem.propTypes = {
  time: PropTypes.number.isRequired,
};
