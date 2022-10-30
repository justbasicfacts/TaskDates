import { isBefore, isAfter } from "date-fns";

export const isRangeBetween = (
  dateToCheck: Date,
  startDate: Date,
  endDate: Date
) => {
  return isBefore(startDate, dateToCheck) && isAfter(endDate, dateToCheck);
};
