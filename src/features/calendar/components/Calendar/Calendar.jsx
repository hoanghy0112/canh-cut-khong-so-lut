/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import CalendarCreateTask from '../CalendarCreateTask/CalendarCreateTask';
import CalendarDisplayTask from '../CalendarDisplayTask/CalendarDisplayTask';
import useWindowSize from '../../../../hooks/useWindowSize';

import CalendarBoard from '../CalendarBoard/CalendarBoard';

import './Calendar.scss';

export default function Calendar({
  startDate,
  tasks,
  changeTask,
  createNewTask,
  retrieveAllTask,
  setGridSize,
  groupBusyTimes,
  isGroup,
}) {
  const [windowWidth] = useWindowSize();

  const [taskRefPosition, setTaskRefPosition] = useState([]);

  const taskRef = useRef(null);

  const [gridSize, setGridSizeState] = useState(199);

  useEffect(() => {
    if (taskRef?.current) {
      setGridSizeState(taskRef.current.getBoundingClientRect().width / 7);
    }
  }, [taskRef, windowWidth]);

  useEffect(() => {
    setGridSize(gridSize);
  }, [gridSize]);

  useEffect(() => {
    setTaskRefPosition(taskRef?.current?.getBoundingClientRect());
  }, []);

  function handleScroll() {
    setTaskRefPosition(taskRef?.current?.getBoundingClientRect());
  }

  return (
    <CalendarBoard startDate={startDate} onScroll={handleScroll} ref={taskRef}>
      <CalendarDisplayTask
        gridSize={gridSize}
        startDate={startDate}
        rect={taskRef?.current?.getBoundingClientRect()}
        tasks={tasks}
        changeTask={changeTask}
        groupBusyTimes={groupBusyTimes}
        isGroup={isGroup}
      />
      <CalendarCreateTask
        taskWrapperRect={taskRefPosition}
        gridSize={gridSize}
        startDate={startDate}
        createNewTask={createNewTask}
        retrieveAllTask={retrieveAllTask}
        isGroup={isGroup}
      />
    </CalendarBoard>
  );
}

Calendar.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      priority: PropTypes.number,
      time: {
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date),
      },
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  changeTask: PropTypes.func,
  createNewTask: PropTypes.func,
  retrieveAllTask: PropTypes.func,
  setGridSize: PropTypes.func,
  groupBusyTimes: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.oneOfType(PropTypes.instanceOf(Date), PropTypes.string),
      to: PropTypes.oneOfType(PropTypes.instanceOf(Date), PropTypes.string),
    }),
  ),
  isGroup: PropTypes.bool,
};

Calendar.defaultProps = {
  startDate: new Date(),
  tasks: [],
  changeTask: () => {},
  createNewTask: () => {},
  retrieveAllTask: () => {},
  setGridSize: () => {},
  groupBusyTimes: [],
  isGroup: false,
};
