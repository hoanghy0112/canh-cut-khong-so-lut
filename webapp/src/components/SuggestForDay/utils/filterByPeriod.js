/* eslint-disable implicit-arrow-linebreak */
import moment from 'moment';
import { TIME_PERIOD_LABELS } from '../../../constants/suggestion';

export default function filterByPeriod(timeList, howLong) {
  const filteredTime = [...timeList];

  if (howLong === TIME_PERIOD_LABELS.FROM_1_TO_2) {
    return filteredTime.filter(
      ({ from, to }) => moment(to).diff(new Date(from), 'hour', true) > 1
    );
  }
  if (howLong === TIME_PERIOD_LABELS.FROM_2_TO_4) {
    return filteredTime.filter(
      ({ from, to }) => moment(to).diff(new Date(from), 'hour', true) > 2
    );
  }
  if (howLong === TIME_PERIOD_LABELS.HALF_DAY) {
    return filteredTime.filter(
      ({ from, to }) => moment(to).diff(new Date(from), 'hour', true) > 4
    );
  }
  if (howLong === TIME_PERIOD_LABELS.A_DAY) {
    return filteredTime.filter(
      ({ from, to }) => moment(to).diff(new Date(from), 'hour', true) > 12
    );
  }

  return filteredTime;
}
