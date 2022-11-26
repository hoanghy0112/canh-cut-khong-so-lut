/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Modal from 'react-modal';

import moment from 'moment/moment';

import {
  ICON_CLOCK,
  ICON_LOCATE,
  ICON_MAIL,
  ICON_MORE_TASK,
  ICON_TRASH,
} from '../../assets/icons';
import TimeTag from '../TimeTag/TimeTag';
import styles from './PopUpMinimize.module.scss';
import CenteredModal from '../CenteredModal/CenteredModal';

Modal.setAppElement('#modal');

export default function DescriptionPopUpMinimize({ data, isGroup = false }) {
  const [isOpen, setIsOpen] = useState(false);

  function getRemainString() {
    const fromDate = new Date(data.time.from);
    const toDate = new Date(data.time.to);
    const now = new Date();

    const diffMonth = moment(fromDate).diff(now, 'month');
    const diffDay = moment(fromDate).diff(now, 'day') % 30;
    const diffHour = moment(fromDate).diff(now, 'hour') % 24;
    const diffMinute = moment(fromDate).diff(now, 'minutes') % 60;

    if (toDate < now) return 'Công việc này đã qua';
    if (fromDate < now && now < toDate) {
      return 'Công việc này đang được diễn ra';
    }

    if (diffMonth) return `Còn lại hơn ${diffMonth} tháng`;
    if (diffDay) return `Còn lại hơn ${diffDay} ngày`;
    if (diffHour) return `Còn lại ${diffHour} giờ ${diffMinute} phút`;
    return `Còn lại ${diffMinute} phút`;
  }

  function handleDelete() {
    dispatch(deleteTask(data));
  }

  return (
    <div className={styles.container}>
      <span className={styles.taskTitle} style={{ cursor: 'default' }}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.todoTime}>
          <TimeTag time={new Date(data.time.from)} onChange={() => {}} />
          -
          <TimeTag time={new Date(data.time.to)} onChange={() => {}} />
        </div>
      </span>
      <div className={styles.sentencesContainer}>
        <div className={styles.desSentence}>
          <img src={ICON_CLOCK} alt='time' />
          <p className={styles.timeRemaining}>{getRemainString()}</p>
        </div>
        {data?.location && (
          <div className={styles.desSentence}>
            <img src={ICON_LOCATE} alt='location' />
            <p className={styles.timeRemaining}>{data.location}</p>
          </div>
        )}
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.detailDescription}>
          {data.descriptions.map((sentence) => (
            <div key={sentence} className={styles.descriptionItem}>
              <p
                className={styles.descriptionText}
                style={{ cursor: 'text', overflowWrap: '-moz-initial' }}
              >
                {sentence}
              </p>
            </div>
          ))}
          <div
            className={styles.moreTaskContainer}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(true)}
          >
            <img src={ICON_MORE_TASK} alt='more task' />
            <p className={styles.text}>Detailed information</p>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.inviteParticipant} style={{ cursor: 'pointer' }}>
          <img src={ICON_MAIL} alt='invite' />
          <p className={styles.textInvite}>Invite participants</p>
        </div>
        <div
          onClick={handleDelete}
          className={styles.trashContainer}
          style={{ cursor: 'pointer' }}
        >
          <img src={ICON_TRASH} alt='trash' />
        </div>
      </div>
      <CenteredModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateNewTask isGroup={isGroup} data={data} />
      </CenteredModal>
    </div>
  );
}
