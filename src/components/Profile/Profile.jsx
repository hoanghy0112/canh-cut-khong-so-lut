import React from 'react';

import styles from './Profile.module.scss';

import useProfileInformation from '../../hooks/useProfileInformation';

export default function Profile() {
  const profile = useProfileInformation()

  return (
    <div className={styles.container}>
      {profile ? (
        <>
          <div className={styles.imageContainer}>
            <img src={profile.photoURL} alt="avatar" />
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.name}>
              <p>{`${profile.displayName}`}</p>
            </div>
            <p className={styles.email}>{profile.email}</p>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
