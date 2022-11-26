import "./SchedulePage.scss";

import PersonalCalendar from "./../../features/calendar/components/PersonalCalendar/PersonalCalendar";

export default function SchedulePage() {
	return (
		<div className="schedule-page">
			<PersonalCalendar />
		</div>
	);
}
