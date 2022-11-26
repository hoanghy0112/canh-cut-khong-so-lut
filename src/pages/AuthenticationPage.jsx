import { useEffect } from "react";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../firebase/config";
import signInWithGoogle from "../firebase/signIn/signInWithGoogle";

export default function AuthenticationPage() {
	return (
		<>
			<abbr title="Sign in with popup by Google account">
				<button onClick={() => signInWithGoogle()}>
					Sign in with google
				</button>
			</abbr>
		</>
	);
}
