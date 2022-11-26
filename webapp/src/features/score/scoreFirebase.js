import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { USERS } from "../../constants/dbTable";
import getUserID from "../../firebase/utils/getUserID";

export default async function updateScoreInFirebase(score) {
	const uid = getUserID();
	const ref = doc(db, USERS, uid);
	await setDoc(ref, { score }, { merge: true });
}
