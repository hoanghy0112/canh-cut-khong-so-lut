import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useProfileInformation() {
	const [profile, setProfile] = useState({
		isPending: true,
		isAuthenticated: false,
	});

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { photoURL, displayName, email, uid } = user;
				setProfile({
					photoURL,
					displayName,
					email,
					uid,
					isPending: false,
					isAuthenticated: true,
				});
			} else {
				setProfile({ isPending: false, isAuthenticated: false });
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return profile;
}
