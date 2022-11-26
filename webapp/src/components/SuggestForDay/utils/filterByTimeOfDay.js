/* eslint-disable implicit-arrow-linebreak */
import { TIME_OF_DAY_LABELS } from '../../../constants/suggestion';

function adjustTime(filteredTime, newFrom, newTo, startHour, endHour) {
  if (newFrom.getHours() > endHour || newTo.getHours() < startHour) return;
  if (newFrom.getHours() < startHour) newFrom.setHours(startHour, 0);
  if (newTo.getHours() > endHour) newTo.setHours(endHour, 0);

  filteredTime.push({ from: newFrom, to: newTo });
}

export default function filterByTimeOfDay(timeList, timeOfDay) {
  const filteredTime = [];

  let isAllEmpty = true;
  timeOfDay.forEach((value) => {
    if (value === true) isAllEmpty = false;
  });
  if (isAllEmpty) {
    return timeList;
  }

  timeList.forEach(({ from, to }) => {
    const newFrom = new Date(from);

    const newTo = new Date(to);

    let startHour;
    let endHour;

    if (timeOfDay.get(TIME_OF_DAY_LABELS.ALL_DAY)) {
      filteredTime.push({ from, to });
      return;
    }

    if (timeOfDay.get(TIME_OF_DAY_LABELS.MORNING)) {
      startHour = 6;
      endHour = 11;
      adjustTime(filteredTime, newFrom, newTo, startHour, endHour);
    }

    if (timeOfDay.get(TIME_OF_DAY_LABELS.NOON)) {
      startHour = 11;
      endHour = 13.5;
      adjustTime(filteredTime, newFrom, newTo, startHour, endHour);
    }

    if (timeOfDay.get(TIME_OF_DAY_LABELS.AFTERNOON)) {
      startHour = 13.5;
      endHour = 18;
      adjustTime(filteredTime, newFrom, newTo, startHour, endHour);
    }

    if (timeOfDay.get(TIME_OF_DAY_LABELS.EVENING)) {
      startHour = 18;
      endHour = 24;
      adjustTime(filteredTime, newFrom, newTo, startHour, endHour);
    }

    if (timeOfDay.get(TIME_OF_DAY_LABELS.LATE_NIGHT)) {
      startHour = 0;
      endHour = 5;
      adjustTime(filteredTime, newFrom, newTo, startHour, endHour);
    }
  });

  return filteredTime;
}
