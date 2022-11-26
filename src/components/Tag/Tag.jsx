import React from 'react';
import {
  ICON_FLAG,
  ICON_BOOK,
  ICON_COMPLETED,
  ICON_PENDING,
  ICON_HAT,
} from '../../assets/icons';
import styles from './Tag.module.scss';

export default function Tag({ type, input = '', shape }) {
  switch (type) {
    case '1':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ '--color': '#1572A1' }}
        >
          <div>
            <ICON_FLAG color='white' />
          </div>
          <p>Can&apos;t be ignored</p>
        </span>
      );
    case '2':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ '--color': '#9AD0EC' }}
        >
          <div>
            <ICON_FLAG color='black' />
          </div>
          <p>Important</p>
        </span>
      );
    case '3':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ '--color': '#EFDAD7' }}
        >
          <div>
            <ICON_FLAG color='black' />
          </div>
          <p>Normal</p>
        </span>
      );
    case '4':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ '--color': '#E3BEC6' }}
        >
          <div>
            <ICON_FLAG color='black' />
          </div>
          <p>Can be ignored</p>
        </span>
      );
    case 'completed':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ '--color': '#0DCF4F' }}
        >
          <div>
            <img src={ICON_COMPLETED} alt='Completed' />
          </div>
          <p>Completed</p>
        </span>
      );
    case 'pending':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ '--color': '#E11C1C' }}
        >
          <div>
            <img src={ICON_PENDING} alt='Pending' />
          </div>
          <p>Pending</p>
        </span>
      );
    case 'tagLearn':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ backgroundColor: '#0066FF', paddingRight: 1, paddingTop: 1 }}
        >
          <img src={ICON_BOOK} alt='Learning' />
        </span>
      );
    case 'chooseTag':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{
            backgroundColor: '#F9B022',
          }}
        >
          <span className={styles.textTag}>{input}</span>
        </span>
      );
    case 'tagUIT':
      return (
        <span
          className={[styles.container, styles[shape]].join(' ')}
          style={{ backgroundColor: '#F9B022' }}
        >
          <img
            src={ICON_HAT}
            alt='uit'
            style={{ width: '55%', height: '55%' }}
          />
        </span>
      );
    default:
      return <h3>This tag is not include component</h3>;
  }
}
