import { doc, setDoc, getDoc, deleteDoc, collection } from "firebase/firestore";
import { ITEMS, MATERIALS, USERS } from "../../constants/dbTable";
import { db } from "../config";
import { Item } from "./Item";
import { Material } from "./Material";

export class User {
	uid: string;
	items: Material[];

	constructor(uid: string) {
		this.uid = uid;
	}

	async saveToFirestore() {
		const ref = doc(db, MATERIALS, this.uid).withConverter(userConverter);
		await setDoc(ref, this);
	}

	static async getUserProfile(uid: string) {}

	async addItem(name: string, weight: number, material: string) {
		const newItem = new Item(name, weight, material);
		newItem.saveToFirestore(`${USERS}/${this.uid}/${ITEMS}`);
	}

	async removeItem(name) {
		const itemRef = doc(db, USERS, this.uid, ITEMS, name);
		await deleteDoc(itemRef);
	}
}

export const userConverter = {
	toFirestore: (user) => {
		return {
			uid: user.uid,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new User(data.uid);
	},
};
