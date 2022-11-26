import "./SchedulePage.scss";

import { useState } from "react";

import PersonalCalendar from "./../../features/calendar/components/PersonalCalendar/PersonalCalendar";
import DateTimePicker from "../../features/calendar/components/DateTimePicker/DateTimePicker";

export default function SchedulePage() {

	const [startDay, setStartDay] = useState(new Date())

	const hanldeChangeStartDay = (date) => {
		setStartDay(date)
	}

	return (
		<div className="schedule-page">
			<DateTimePicker startDay={startDay} hanldeChangeStartDay={hanldeChangeStartDay} />
			<PersonalCalendar startDate={startDay}/>
		</div>
	);
}
