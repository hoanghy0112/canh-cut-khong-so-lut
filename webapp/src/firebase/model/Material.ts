import { doc, setDoc, getDoc } from "firebase/firestore";
import { ITEMS, MATERIALS } from "../../constants/dbTable";
import { db } from "../config";

export class Material {
	name: string;
	polution: number;

	constructor(name: string, polution: number) {
		this.name = name;
		this.polution = polution;
	}

	async saveToFirestore() {
		const ref = doc(db, MATERIALS, this.name).withConverter(
			materialConverter
		);
		await setDoc(ref, this);
	}

	static async getMaterialByName(
		materialName: string
	): Promise<Material | undefined> {
		const ref = doc(db, MATERIALS, materialName).withConverter(
			materialConverter
		);
		const itemSnap = await getDoc(ref);

		return itemSnap.data();
	}
}

export const materialConverter = {
	toFirestore: (material) => {
		return {
			name: material.name,
			polution: material.polution,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Material(data.name, data.polution);
	},
};
