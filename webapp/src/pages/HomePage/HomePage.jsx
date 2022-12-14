import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";

import Profile from "../../components/Profile/Profile";
import TabButton from "../../components/TabButton/TabButton";

import { ICON_LOGOUT } from "../../assets/icons";
import LOGO from "../../assets/Logo.png";

import useRouterNavigation from "../../hooks/useRouterNavigation";

import styles from "./HomePage.module.scss";
import { ITEM_MANAGEMENT } from "../../constants/pathName";

const HomePage = () => {
	useRouterNavigation();

	const navigate = useNavigate();

	const [tab, setTab] = useState("");
	const location = useLocation();

	useEffect(() => {
		setTab(location.pathname.split("/").slice(-1)[0]);
	}, [location]);

	function handleSignout() {
		const auth = getAuth();
		auth.signOut();
	}

	//console.log(tab)

	return (
		<div className={styles.container}>
			<div className={styles.informationBox}>
				<div className={styles.topBox}>
					<Profile
						onClick={() => {
							navigate("/home/profile");
						}}
					/>
					<div className={styles.buttonBox}>
						<TabButton
							isSelected={tab === ""}
							type="Home"
							onClick={() => {
								navigate("/");
							}}
						/>
						<TabButton
							isSelected={tab === "suggestion"}
							type="Suggestion"
							onClick={() => {
								navigate("/suggestion");
							}}
						/>
						<TabButton
							isSelected={tab === "item"}
							type="Item"
							onClick={() => {
								navigate(ITEM_MANAGEMENT);
							}}
						/>
						<TabButton
							isSelected={tab === "accumulated"}
							type="Gifts"
							onClick={() => {
								navigate("/accumulated");
							}}
						/>
					</div>
				</div>
				<button
					type="button"
					className={styles.signOutButton}
					onClick={handleSignout}
				>
					<ICON_LOGOUT className={styles.signOutIcon} />
					<p>Log out</p>
				</button>
			</div>
			<div className={styles.mainBox}>
				<div className={styles.header}>
					<img src={LOGO} alt="Logo" />
				</div>
				<div className={styles.outlet}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
