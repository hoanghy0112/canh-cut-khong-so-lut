/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { ICON_SEARCH } from "../../../../assets/icons";

import styles from "./TagChoosing.module.scss";

export default function TagChoosing({ setTag }) {
	// const [tagList, setTagList] = useState([]);
	const [keyword, setKeyword] = useState("");

	// const tagList = useSelector(selectTagsWithKeyword(keyword));

	async function fetchData() {
		// if (keyword) setTagList(await findTagByTitleAPI(keyword));
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			fetchData();
		}, 300);

		return () => clearTimeout(timeout);
	}, [keyword]);

	function handleKeywordChanged(e) {
		setKeyword(e.target.value);
	}

	function handleChooseTag(id) {
		setTag(id);
	}

	return (
		<div onClick={(e) => e.stopPropagation()} className={styles.container}>
			<label className={styles.inputBox}>
				<img src={ICON_SEARCH} alt="search" />
				<input
					placeholder="Enter tag name here ..."
					value={keyword}
					onChange={handleKeywordChanged}
				/>
			</label>
			<div className={styles.tagList}>
				{tagList.map(({ _id, color, title, description }) => (
					<div
						onClick={() => handleChooseTag(_id)}
						key={_id}
						style={{ "--color": color }}
						className={styles.tag}
					>
						<div className={styles.header}>
							<div style={{ backgroundColor: color }} />
							<p>{title}</p>
						</div>
						<p className={styles.description}>{description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

TagChoosing.propTypes = {
	setTag: PropTypes.func,
};

TagChoosing.defaultProps = {
	setTag: () => {},
};
