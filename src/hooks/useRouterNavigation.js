import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProfileInformation from "./useProfileInformation";
import { AUTHENTICATION_PAGE, HOME_PAGE } from "../constants/pathName";

export default function useAuthenticationNavigation() {
	const profile = useProfileInformation();
	const navigate = useNavigate();

	useEffect(() => {
		const { isPending, isAuthenticated } = profile;
		console.log({ profile });

		if (!isPending) {
			if (!isAuthenticated) navigate(AUTHENTICATION_PAGE);
			else navigate(HOME_PAGE);
		}
	}, [profile]);
}
