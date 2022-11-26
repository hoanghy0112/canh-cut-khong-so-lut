import { useEffect } from "react";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/config";
import signInWithGoogle from "../firebase/signIn/signInWithGoogle";
import { Item } from "../firebase/model/Item";
import { Material } from "../firebase/model/Material";

export default function AuthenticationPage() {
	const item = new Item("chen", 100, "nhua");
	const material = new Material("nhua", 50);

	useEffect(() => {
		async function display() {
			console.log(await item.getPolutionAmount());
		}
		display();
	}, []);

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
