import "./SchedulePage.scss";

import { useState } from "react";

import PersonalCalendar from "./../../features/calendar/components/PersonalCalendar/PersonalCalendar";
import DateTimePicker from "../../features/calendar/components/DateTimePicker/DateTimePicker";

export default function SchedulePage() {
	// const [startDay, setStartDay] = useState(new Date());

	const now = new Date();

	const [date, setDate] = useState(
		new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - now.getDay() + 1
		)
	);

	function handleChangeDate(newDate) {
		setDate(
			new Date(
				newDate.getFullYear(),
				newDate.getMonth(),
				newDate.getDate() - newDate.getDay() + 1
			)
		);
	}

	return (
		<div className="schedule-page">
			<DateTimePicker
				startDay={date}
				hanldeChangeStartDay={handleChangeDate}
			/>
			<PersonalCalendar startDate={date} />
		</div>
	);
}
