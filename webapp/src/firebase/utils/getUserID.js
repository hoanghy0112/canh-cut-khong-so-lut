import { getAuth } from "firebase/auth";

export default function getUserID() {
	const auth = getAuth();
	const uid = auth.currentUser.uid;

	return uid;
}
