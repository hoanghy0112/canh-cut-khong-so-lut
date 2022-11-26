<<<<<<< HEAD
import React from "react";
import useProfileInformation from "../../hooks/useProfileInformation";

import styles from "./Profile.module.scss";

export default function Profile({ handleClick = () => {} }) {
	const user = useProfileInformation();

	return (
		<div className={styles.container} onClick={handleClick}>
			{user ? (
				<>
					<div className={styles.imageContainer}>
						{user?.photoURL ? (
							<img src={user.photoURL} alt="avatar" />
						) : (
							<div />
						)}
					</div>
					<div className={styles.nameContainer}>
						<div className={styles.name}>
							<p>{user.displayName}</p>
						</div>
						<p className={styles.email}>{user.email}</p>
					</div>
				</>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
=======
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
>>>>>>> 324866867ef06413f324100605110897c0d445c1
}
