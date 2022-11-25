import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBscBycJQJgiq6ecVmxpDKmuJvYwCvwUeg",
	authDomain: "penguinnoafraidflood.firebaseapp.com",
	projectId: "penguinnoafraidflood",
	storageBucket: "penguinnoafraidflood.appspot.com",
	messagingSenderId: "726192918955",
	appId: "1:726192918955:web:ffa67e0ee294518ed542ee",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
