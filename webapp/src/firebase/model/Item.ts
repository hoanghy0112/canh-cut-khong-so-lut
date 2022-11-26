import { doc, setDoc, getDoc } from "firebase/firestore";
import { ITEMS, MATERIALS } from "../../constants/dbTable";
import { db } from "../config";
import { Material, materialConverter } from "./Material";

export class Item {
	name: string;
	material: string;
	weight: number;
	date: Date;
	quantity: number;

	constructor(
		name: string,
		weight: number,
		material: string,
		date: Date = new Date(),
		quantity: number = 1
	) {
		this.name = name;
		this.weight = weight;
		this.material = material;
		this.date = date;
		this.quantity = quantity;
	}

	async saveToFirestore(collection: string = ITEMS) {
		const ref = doc(db, collection, this.name).withConverter(itemConverter);
		await setDoc(ref, this);
	}

	async getPolutionAmount(collection: string = ITEMS) {
		const itemRef = doc(db, collection, this.name).withConverter(
			itemConverter
		);
		const itemSnap = await getDoc(itemRef);
		const itemData = itemSnap.data();

		const materialData = await Material.getMaterialByName(this.material);

		return (itemData?.weight || 0) * (materialData?.polution || 0);
	}
}

export const itemConverter = {
	toFirestore: (item) => {
		return {
			name: item.name,
			weight: item.weight,
			material: item.material,
			date: item.date,
			quantity: item.quantity,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Item(
			data.name,
			data.weight,
			data.material,
			data.date,
			data.quantity
		);
	},
};
