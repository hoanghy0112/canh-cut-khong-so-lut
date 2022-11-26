/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Calendar from '../Calendar/Calendar';

import {
  changeTaskOfGroup,
  createTaskOfGroup,
  getBusyTimeOfGroup,
  getTaskOfGroup,
  selectCurrentGroupInfo,
  selectGroupBusyTime,
  selectGroupTaskOfCurrentGroup,
} from '../../../groupsManagement/groupSlice';

// import styles from './GroupCalendar.module.scss';

export default function GroupCalendar({ startDate }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const tasks = useSelector(selectGroupTaskOfCurrentGroup);
  const currentGroupInfo = useSelector(selectCurrentGroupInfo);
  const groupBusyTimes = useSelector(selectGroupBusyTime);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const groupID = location.pathname.split('/').slice(-1)[0];
        const from = new Date(startDate).getTime();
        const to = new Date(from + 7 * 24 * 60 * 60 * 1000).getTime();
        dispatch(getBusyTimeOfGroup({ groupID, from, to }));
      }
    });

    return () => unsubscribe();
  }, [startDate]);

  return (
    <Calendar
      startDate={startDate}
      tasks={tasks}
      groupBusyTimes={groupBusyTimes}
      createNewTask={(data) => {
        dispatch(createTaskOfGroup({ groupID: currentGroupInfo._id, ...data }));
      }}
      changeTask={(data, taskID) => {
        dispatch(changeTaskOfGroup({ taskID, ...data }));
      }}
      retrieveAllTask={() => dispatch(getTaskOfGroup())}
      isGroup
    />
  );
}

GroupCalendar.propTypes = {
  startDate: PropTypes.instanceOf(Date),
};

GroupCalendar.defaultProps = {
  startDate: new Date(),
};
