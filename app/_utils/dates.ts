import {
  addSeconds,
  differenceInMonths as diffInMonths,
  differenceInSeconds,
  formatDistanceToNow as formatDistanceToNowAgo,
  isPast,
} from 'date-fns';

export {
  addMonths,
  addYears,
  differenceInYears,
  format,
  formatDistance,
  formatDistanceToNow,
  formatDuration,
  getDate,
  getWeek,
  getYear,
  isAfter,
  isBefore,
  setDate,
  setMonth,
  setYear,
  subDays,
  subMonths,
  subYears,
} from 'date-fns';

export const getDuration = (startDate: string, endDate: string) => {
  const months = diffInMonths(newDate(endDate), newDate(startDate));
  let years = Math.floor(months / 12);
  let remainingMonths = months % 12;

  let result = '';

  if (years > 0) {
    result += years + ' year' + (years > 1 ? 's' : '');
  }

  if (remainingMonths > 0) {
    if (years > 0) {
      result += ' ';
    }
    result += remainingMonths + ' month' + (remainingMonths > 1 ? 's' : '');
  }

  return result;
};
export const newDate = (date?: string) => {
  return date ? new Date(date) : new Date();
};

export function secondsSinceCreation(createdAt: string) {
  const creationDate = new Date(createdAt);
  const secondsDifference = differenceInSeconds(new Date(), creationDate);

  const allowedTime = 3 * 24 * 60 * 60;

  if (isPast(addSeconds(creationDate, allowedTime))) {
    return 0;
  } else {
    return allowedTime - secondsDifference; // return the remaining seconds
  }
}

export function formatDurationAgo(value: string) {
  return formatDistanceToNowAgo(newDate(value), {
    addSuffix: true,
  })
    .replace('about', '')
    .replace('less than', '');
}
