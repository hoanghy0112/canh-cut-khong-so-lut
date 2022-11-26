import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

export default function MyTimePicker({ time, handleChangeTime }) {
  const [value, onChange] = useState(`${time.getHours()}:${time.getMinutes()}`);

  const setTime = (value) => {
    const hour = parseInt(value.substr(0, 2));
    const minutes = parseInt(value.substr(value.length - 2, 2));
    return new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
      hour,
      minutes,
    );
  };

  return (
    <TimePicker
      onChange={onChange}
      value={value}
      autoFocus={true}
      onClockClose={() => handleChangeTime(setTime(value))}
    />
  );
}
