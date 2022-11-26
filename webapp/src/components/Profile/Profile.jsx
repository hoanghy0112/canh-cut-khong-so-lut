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
}
