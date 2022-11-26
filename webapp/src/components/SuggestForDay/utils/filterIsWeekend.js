/* eslint-disable implicit-arrow-linebreak */
import { IS_WEEKEND_LABELS } from '../../../constants/suggestion';

export default function filterIsWeekend(timeList, isWeekend) {
  if (isWeekend === IS_WEEKEND_LABELS.WEEKEND) {
    return timeList.filter(
      ({ from }) =>
        new Date(from).getDay() === 0 || new Date(from).getDay() === 6
    );
  }

  if (isWeekend === IS_WEEKEND_LABELS.NOT_WEEKEND) {
    return timeList.filter(
      ({ from }) => new Date(from).getDay() > 0 || new Date(from).getDay() < 6
    );
  }

  return timeList;
}
