import React from "react";
import styles from "./TabButton.module.scss";
import {
	ICON_SUGGESTION,
	ICON_HOUSE,
	ICON_USED,
	ICON_POINT,
} from "../../assets/icons";

export default function TabButton({
	isSelected = false,
	onClick,
	type = "Home",
}) {
	const icon = (() => {
		switch (type) {
			case "Home":
				return (
					<ICON_HOUSE
						color={isSelected ? "white" : "green"}
						className={styles.house}
					/>
				);
			case "Suggestion":
				return (
					<ICON_SUGGESTION
						color={isSelected ? "white" : "green"}
						className={styles.house}
					/>
				);
			case "Item":
				return (
					<ICON_USED
						color={isSelected ? "white" : "green"}
						className={styles.house}
					/>
				);
			case "Gifts":
				return (
					<ICON_POINT
						color={isSelected ? "white" : "green"}
						className={styles.house}
					/>
				);
			default:
				return (
					<ICON_HOUSE
						color={isSelected ? "white" : "black"}
						className={styles.house}
					/>
				);
		}
	})();
	return (
		<button
			type="button"
			className={`${styles.selected} ${
				isSelected && styles["dark-background"]
			}`}
			onClick={onClick}
		>
			{icon}
			<p
				className={`${styles["home-text"]} ${
					isSelected ? styles["light-text"] : styles["dark-text"]
				}`}
			>
				{type}
			</p>
		</button>
	);
}
