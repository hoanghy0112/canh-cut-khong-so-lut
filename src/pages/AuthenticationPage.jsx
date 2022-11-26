import { useEffect } from "react";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/config";
import signInWithGoogle from "../firebase/signIn/signInWithGoogle";
import { Item } from "../firebase/model/Item";
import { Material } from "../firebase/model/Material";

import useProfileInformation from "../hooks/useProfileInformation";
import { User } from "../firebase/model/User";

export default function AuthenticationPage() {
	const item = new Item("chen", 100, "nhua");
	const material = new Material("nhua", 50);
	const profile = useProfileInformation();

	useEffect(() => {
		async function display() {
			console.log(await item.getPolutionAmount());
		}
		display();
	}, []);

	useEffect(() => {
		if (profile) {
			// const uid = profile.uid;
			// const user = new User(uid);
			// console.log({ uid });
			// user.addItem("ly", 50, "nhua");
		}
	}, [profile]);

	return (
		<>
			<abbr title="Sign in with popup by Google account">
				<button onClick={() => signInWithGoogle()}>
					Sign in with google
				</button>
				<button onClick={() => item.saveToFirestore()}>save item</button>
				<button onClick={() => material.saveToFirestore()}>
					save material
				</button>
			</abbr>
		</>
	);
}
