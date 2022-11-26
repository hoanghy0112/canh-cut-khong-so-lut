/* eslint-disable function-paren-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";

import {
	ICON_ADD,
	ICON_CHART,
	ICON_FULL_ARROW_RIGHT,
	ICON_LOCATE,
	ICON_MAIL,
	ICON_TRASH,
} from "../../../../assets/icons";

import { changeTask, deleteTask } from "../../../task/taskSlice";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import TimeTag from "../TimeTag/TimeTag";
import styles from "./CreateNewTask.module.scss";

Modal.setAppElement("#modal");

export default function CreateNewTask({
	data,
	onChange,
	onCreateNewTask,
	isGroup,
}) {
	const dispatch = useDispatch();

	const [title, setTitle] = useState(data?.title || "");
	const [startTime, setStartTime] = useState(
		new Date(data?.time?.from) || new Date()
	);
	const [endTime, setEndTime] = useState(
		new Date(data?.time?.to) || new Date()
	);
	const [position, setPosition] = useState(data?.location || "");
	const [priority, setPriority] = useState(data?.priority || 3);
	const [participants] = useState(data?.participants || []);

	const [tags, setTags] = useState(data?.tags || []);
	// const [populatedTags, setPopulatedTags] = useState([]);

	const [desSentence, setDesSentence] = useState(
		data?.descriptions?.filter((des) => des !== "") || []
	);

	const [isAdd, setIsAdd] = useState(false);
	const [descriptionAdd, setDescriptionAdd] = useState("");

	const [isAddTag, setIsAddTag] = useState(false);
	const [isChoosePriority, setIsChoosePriority] = useState(false);

	useEffect(() => {
		const newData = {
			title,
			time: {
				from: startTime.toISOString(),
				to: endTime.toISOString(),
			},
			location: position,
			priority,
			participants,
			tags,
			descriptions: desSentence,
		};

		const timeout = setTimeout(() => {
			if (onChange) {
				onChange(newData, data._id);
			} else {
				dispatch(
					changeTask({
						_id: data._id,
						...newData,
					})
				);
			}
		}, 500);

		return () => clearTimeout(timeout);
	}, [
		title,
		startTime,
		endTime,
		position,
		priority,
		participants,
		tags,
		desSentence,
	]);

	function handleCreateNewTask() {
		const newData = {
			title,
			time: {
				from: startTime.toISOString(),
				to: endTime.toISOString(),
			},
			location: position,
			priority,
			participants,
			tags,
			descriptions: desSentence,
		};

		onCreateNewTask(newData);
	}

	function handleDelete() {
		dispatch(deleteTask(data));
	}

	function handleAddTag(tagID) {
		setTags((prev) => [...prev, tagID]);
	}

	const handleAddDescription = () => {
		const str = descriptionAdd.replace(/\s/g, "");
		if (str !== "") {
			setDesSentence((current) => [
				...current.filter((des) => des !== ""),
				descriptionAdd.trim(),
			]);
		}
		setDescriptionAdd("");
		setIsAdd(false);
	};

	function getTagStyle(priorityNum) {
		switch (priorityNum) {
			case 1:
				return ["Can't be ignored", "#1572A1", "white"];
			case 2:
				return ["Important", "#9AD0EC", "black"];
			case 3:
				return ["Normal", "#EFDAD7", "black"];
			case 4:
				return ["Can be ignored", "#E3BEC6", "black"];

			default:
				return ["Normal", "#EFDAD7", "black"];
		}
	}

	const [priorityText, priorityBackgroundColor, priorityColor] =
		getTagStyle(priority);

	return (
		<div
			onClick={() => {
				setIsAddTag(false);
				setIsChoosePriority(false);
			}}
			className={styles.container}
		>
			<span className={styles.taskTitle}>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					tabIndex="0"
					className={styles.input}
					placeholder="Task’s title..."
					spellCheck="false"
				/>
			</span>
			<div className={styles.timeContainer}>
				<div className={styles.todoTime}>
					<TimeTag time={startTime} onChange={setStartTime} />
					-
					<TimeTag time={endTime} onChange={setEndTime} />
				</div>
				<span className={styles.timePicker}>
					<DateTimePicker
						startDay={startTime}
						hanldeChangeStartDay={() => {}}
					/>
				</span>
			</div>
			<div className={styles.sentencesContainer}>
				<div className={styles.desSentence}>
					<img src={ICON_LOCATE} alt="time" />
					<input
						className={styles.input}
						value={position}
						onChange={(e) => setPosition(e.target.value)}
						style={{ overflowWrap: "-moz-initial" }}
						placeholder="Enter your task’s location here..."
						spellCheck="false"
					/>
				</div>
				<div className={styles.desSentence_2}>
					<img src={ICON_CHART} alt="priority" />
					<div className={styles.priorityDropDown}>
						<div
							className={styles.priorityHeader}
							style={{
								"--background-color": priorityBackgroundColor,
								"--color": priorityColor,
							}}
							onClick={(e) => {
								e.stopPropagation();
								setIsChoosePriority(true);
							}}
						>
							<p>{priorityText}</p>
						</div>
						{isChoosePriority && (
							<div className={styles.choosingBox}>
								{Array(4)
									.fill("")
									.map((_, index) => (
										<div
											className={styles.tagItem}
											style={{
												"--background-color": getTagStyle(
													index + 1
												)[1],
												"--color": getTagStyle(index + 1)[2],
											}}
											onClick={() => setPriority(index + 1)}
										>
											<p>{getTagStyle(index + 1)[0]}</p>
										</div>
									))}
							</div>
						)}
					</div>
				</div>
			</div>
			<div className={styles.descriptionContainer}>
				<p className={styles.text}>Description</p>
				<div className={styles.detailDescription}>
					{desSentence.map((sentence, index) => (
						<div key={index} className={styles.descriptionItem}>
							<textarea
								className={styles.descriptionText}
								value={sentence}
								rows={sentence.split("\n").length}
								spellCheck="false"
								onChange={(e) => {
									setDesSentence(
										[...desSentence]
											.map((object) => {
												if (object === sentence)
													return e.target.value;
												return object;
											})
											.filter((des) => des !== "")
									);
								}}
								onBlur={(e) =>
									setDesSentence(
										[...desSentence].map((object) => {
											if (object === sentence)
												return e.target.value.trim();
											return object;
										})
									)
								}
							/>
						</div>
					))}
					{isAdd ? (
						<div className={styles.descriptionItem}>
							<textarea
								className={styles.descriptionText}
								value={descriptionAdd}
								rows={descriptionAdd.split("\n").length}
								spellCheck="false"
								onChange={(e) => {
									setDescriptionAdd(e.target.value);
								}}
								onBlur={handleAddDescription}
							/>
						</div>
					) : (
						<div
							className={styles.addDescription}
							style={{ cursor: "pointer" }}
							onClick={() => setIsAdd(true)}
						>
							<img src={ICON_ADD} alt="add" />
							<p className={styles.addText}>Add description</p>
						</div>
					)}
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<div
					className={styles.inviteParticipant}
					style={{ cursor: "pointer" }}
				>
					<img src={ICON_MAIL} alt="invite" />
					<p className={styles.textInvite}>Invite participants</p>
				</div>
				<div
					onClick={handleDelete}
					className={styles.trashContainer}
					style={{ cursor: "pointer" }}
				>
					<img src={ICON_TRASH} alt="trash" />
				</div>
			</div>
			{data._id ? (
				""
			) : (
				<div className={styles.createButton} onClick={handleCreateNewTask}>
					<p>Create</p>
					<img src={ICON_FULL_ARROW_RIGHT} alt="next" />
				</div>
			)}
		</div>
	);
}

CreateNewTask.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		time: PropTypes.shape({
			from: PropTypes.oneOfType(
				PropTypes.instanceOf(Date),
				PropTypes.string
			),
			to: PropTypes.oneOfType(PropTypes.instanceOf(Date), PropTypes.string),
		}),
		position: PropTypes.string,
		participants: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				displayName: PropTypes.string,
			})
		),
		tags: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				displayName: PropTypes.string,
			})
		),
		descriptions: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				text: PropTypes.string,
			})
		),
	}),
	isGroup: PropTypes.bool,
};

CreateNewTask.defaultProps = {
	isGroup: false,
	data: {},
};
