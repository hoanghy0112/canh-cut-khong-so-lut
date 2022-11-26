import React from 'react';

import styles from '../../pages/HomePage/ProfileOutlet/ProfileOutlet.module.scss';

export default function Info(props) {
  return (
    <div className={styles.userInfo}>
      <div className={styles.imageAndName}>
        <div className={styles.imageContainer}>
          <img src={props.photo} alt='avatar' />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>
            <p>
              {props.givenName} {props.familyName}
            </p>
          </div>
        </div>
      </div>
      <p>Personal Information</p>
      <div className={styles.userInfoTable}>
        <table width='100%'>
          <tr>
            <td className={styles.header}>Name:</td>
            <td>
              {props.givenName} {props.familyName}
            </td>
          </tr>
          <tr>
            <td className={styles.header}>Gender:</td>
            <td></td>
          </tr>
          <tr>
            <td className={styles.header}>Date of birth:</td>
            <td></td>
          </tr>
          <tr>
            <td className={styles.header}>Email:</td>
            <td>{props.email}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
