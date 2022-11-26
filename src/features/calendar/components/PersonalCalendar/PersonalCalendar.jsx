import React from "react";

import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

import {
	changeTask,
	createNewTask,
	selectCurrentWeekTasks,
} from "../../../task/taskSlice";

import Calendar from "../Calendar/Calendar";

export default function PersonalCalendar({ startDate }) {
	const dispatch = useDispatch();
	const tasks = useSelector(selectCurrentWeekTasks(startDate));

	return (
		
			<Calendar
				startDate={startDate}
				tasks={tasks}
				changeTask={(data) => dispatch(changeTask(data))}
				createNewTask={(data) => dispatch(createNewTask(data))}
			/>

	);
}

PersonalCalendar.propTypes = {
	startDate: PropTypes.instanceOf(Date),
};

PersonalCalendar.defaultProps = {
	startDate: new Date(),
};
