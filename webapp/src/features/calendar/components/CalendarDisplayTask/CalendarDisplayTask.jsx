/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

import PropTypes from "prop-types";

import TaskCard from "../TaskCard/TaskCard";

export default function CalendarDisplayTask({
	gridSize,
	rect,
	startDate,
	tasks,
	changeTask,
	groupBusyTimes,
	isGroup,
}) {
	// const groupInfo = useSelector(selectCurrentGroupInfo);

	// const suggestionVisible = useSelector(selectSuggestionVisible);
	// const suggestionTime = useSelector(selectSuggestionTime);

	return (
		<>
			{tasks.map(({ _id }, index) => (
				<TaskCard
					key={_id}
					task={tasks[index]}
					width={gridSize}
					rect={rect}
					startDate={startDate}
					changeTask={changeTask}
					isGroup={isGroup}
				/>
			))}
		</>
	);
}

CalendarDisplayTask.propTypes = {
	gridSize: PropTypes.number.isRequired,
	startDate: PropTypes.instanceOf(Date).isRequired,
	rect: PropTypes.instanceOf(DOMRect),
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string,
			title: PropTypes.string,
			priority: PropTypes.number,
			time: {
				from: PropTypes.instanceOf(Date),
				to: PropTypes.instanceOf(Date),
			},
			tags: PropTypes.arrayOf(PropTypes.string),
		})
	),
	changeTask: PropTypes.func.isRequired,
	groupBusyTimes: PropTypes.arrayOf(
		PropTypes.shape({
			from: PropTypes.instanceOf(Date),
			to: PropTypes.instanceOf(Date),
		})
	),
	isGroup: PropTypes.bool,
};

CalendarDisplayTask.defaultProps = {
	tasks: [],
	groupBusyTimes: [],
	isGroup: false,
	rect: new DOMRect(0, 0, 0, 0),
};
