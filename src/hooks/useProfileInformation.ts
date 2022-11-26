import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface IProfile {
	photoURL?: string | null;
	displayName?: string | null;
	email?: string | null;
	uid?: string | null;
	accessToken?: string | null;
	isPending: boolean;
	isAuthenticated: boolean;
}

export default function useProfileInformation() {
	const [profile, setProfile] = useState<IProfile>({
		isPending: true,
		isAuthenticated: false,
	});

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const { photoURL, displayName, email, uid } = user;
				const accessToken = await auth.currentUser?.getIdToken();
				setProfile({
					photoURL,
					displayName,
					email,
					uid,
					accessToken,
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
