import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useProfileInformation from "./useProfileInformation";
import { AUTHENTICATION_PAGE, HOME_PAGE } from "../constants/pathName";

export default function useAuthenticationNavigation() {
	const profile = useProfileInformation();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const { isPending, isAuthenticated } = profile;
		console.log({ profile });

		if (!isPending) {
			if (!isAuthenticated) navigate(AUTHENTICATION_PAGE);
			else {
				if (!location) return;

				const path = location.pathname.split("/").slice(-1)[0];
				if (path === "authentication") navigate(HOME_PAGE);
			}
		}
	}, [profile]);
}
