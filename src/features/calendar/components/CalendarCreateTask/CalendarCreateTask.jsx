/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useLayoutEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import Modal from 'react-modal';

import CenteredModal from '../../../../components/CenteredModal/CenteredModal';
import CreateNewTask from '../../../../components/CreateNewTask/CreateNewTask';
import styles from './CalendarCreateTask.module.scss';

Modal.setAppElement('#modal');

export default function CalendarCreateTask({
  gridSize,
  taskWrapperRect,
  startDate,
  createNewTask,
  retrieveAllTask,
  isGroup,
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isCreateNewTask, setIsCreateNewTask] = useState(false);
  const [data, setData] = useState(null);

  const [begin, setBegin] = useState([0, 0]);
  const [end, setEnd] = useState([0, 0]);

  const [height, setHeight] = useState(0);

  const offset = useRef(null);

  useLayoutEffect(() => {
    setHeight(Math.abs(end[1] - begin[1]));
  }, [end]);

  function handleMouseMove(e) {
    e.stopPropagation();
    const parentRect = taskWrapperRect;
    offset.current = [e.clientX - parentRect.left, e.clientY - parentRect.top];
    if (isMouseDown) {
      setEnd([...offset.current]);
    }
  }

  function handleMouseDown(e) {
    e.stopPropagation();
    setIsMouseDown(true);
    setBegin([
      parseInt(offset.current[0] / gridSize, 10) * gridSize,
      offset.current[1],
    ]);
    setEnd([...offset.current]);
  }

  function handleMouseUp(e) {
    e.stopPropagation();
    if (isMouseDown) {
      const top = end[1] > begin[1] ? begin[1] : end[1];
      const newFrom = new Date(
        startDate.getYear() + 1900,
        startDate.getMonth(),
        startDate.getDate() + parseInt(begin[0] / gridSize, 10),
        parseInt((top / 1200) * 24, 10),
        parseInt((top / 1200) * 24 * 60, 10) % 60,
      );

      setIsCreateNewTask(true);

      setData({
        time: {
          from: newFrom,
          to: new Date(
            parseInt(
              newFrom.getTime() + (height / 1200) * 24 * 60 * 60 * 1000,
              10,
            ),
          ),
        },
      });
    }
  }

  return (
    <div className={styles.container}>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className={styles.relative}
      >
        {gridSize && isMouseDown && (
          <div
            style={{
              top: end[1] > begin[1] ? begin[1] : end[1],
              left: begin[0],
              width: gridSize,
              height,
            }}
            className={styles.innerTask}
          >
            <div />
          </div>
        )}
      </div>
      <CenteredModal
        isOpen={isCreateNewTask}
        onClose={() => {
          setIsCreateNewTask(false);
          setIsMouseDown(false);
          setEnd([...begin]);
          setHeight(0);
        }}
      >
        <CreateNewTask
          data={data}
          onChange={setData}
          isGroup={isGroup}
          onCreateNewTask={(newData) => {
            setIsCreateNewTask(false);
            createNewTask(newData);
            setTimeout(() => retrieveAllTask(), 500);
            setIsMouseDown(false);
            setEnd([...begin]);
            setHeight(0);
          }}
        />
      </CenteredModal>
    </div>
  );
}

CalendarCreateTask.propTypes = {
  gridSize: PropTypes.number.isRequired,
  createNewTask: PropTypes.func.isRequired,
  retrieveAllTask: PropTypes.func.isRequired,
  taskWrapperRect: PropTypes.instanceOf(DOMRect),
  startDate: PropTypes.instanceOf(Date).isRequired,
  isGroup: PropTypes.bool,
};

CalendarCreateTask.defaultProps = {
  isGroup: false,
  taskWrapperRect: new DOMRect(0, 0, 0, 0),
};
