import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../config";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export default function signInWithGoogle() {
	return new Promise((resolve) => {
		signInWithPopup(auth, provider).then((result) => {
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			const { user } = result;

			resolve(user);
		});
	});
}
