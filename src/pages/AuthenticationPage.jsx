import { useEffect } from "react";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/config";
import signInWithGoogle from "../firebase/signIn/signInWithGoogle";

import LoginButton from "../components/LoginButton/LoginButton";

import { ICON_FORWARD } from "../assets/icons";

import styles from './AuthenticationPage.module.scss'

export default function AuthenticationPage() {
	useEffect(() => {
		async function testFirestore() {
			try {
				// const docRef = await addDoc(collection(db, "users"), {
				// 	first: "Ada",
				// 	last: "Lovelace",
				// 	born: 1815,
				// });
				await setDoc(doc(db, "cities", "LA"), {
					name: "Los Angeles",
					state: "CA",
					country: "USA",
				});
				console.log("aaaaaaaa");
				// console.log("Document written with ID: ", docRef);
			} catch (e) {
				// console.error("Error adding document: ", e);
			}
		}

		testFirestore();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.authenticationContainer}>
				<img src="" alt="" />
				<div className={styles.authenticationTab}>
					<div className={styles.header}>
						<p>Welcome to</p>
						<p className={styles.appName}>The more the merrier</p>
					</div>
					<div className={styles.signInContainer}>
						<div className={styles.signInButtons}>
							<LoginButton
								providerName="Google"
								onClick={() => handleSignInWithGoogle()}
							/>
						</div>
						<div className={styles.noSignIn}>
							<p>Continue without sign in</p>
							<img src={ICON_FORWARD} alt="arrow forward" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
