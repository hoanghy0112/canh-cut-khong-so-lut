import { useEffect } from "react";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/config";
import signInWithGoogle from "../firebase/signIn/signInWithGoogle";

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
		<>
			<button onClick={() => signInWithGoogle()}>Sign in with google</button>
		</>
	);
}
