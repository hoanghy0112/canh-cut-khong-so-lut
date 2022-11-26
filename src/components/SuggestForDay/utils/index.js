import filterByPeriod from './filterByPeriod';
import filterByTimeOfDay from './filterByTimeOfDay';
import filterIsWeekend from './filterIsWeekend';
import { getInitialTimeList, splitBusyTime, splitDay } from './utils';

export default function filterTime(
  startDate, // Date
  busyTime,
  howLong,
  timeOfDay,
  isWeekend,
) {
  let filteredTime = getInitialTimeList(startDate);

  filteredTime = splitBusyTime(filteredTime, busyTime);
  filteredTime = splitDay(filteredTime);

  let timeList = filterByPeriod(filteredTime, howLong);
  timeList = filterByTimeOfDay(timeList, timeOfDay);
  timeList = filterIsWeekend(timeList, isWeekend);

  filteredTime.sort(
    (a, b) => new Date(a.from).getTime() - new Date(b.from).getTime(),
  );

  return timeList;
}
