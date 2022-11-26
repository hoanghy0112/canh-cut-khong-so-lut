import React from 'react';
import styles from './UserChosen.module.scss';

export default function UserChosen() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Welcome to ENVGuins</p>
      <p className={styles.content}>Who are you?</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button1}>User</button>
        <button className={styles.button2}>Organization</button>
      </div>
    </div>
  );
}
