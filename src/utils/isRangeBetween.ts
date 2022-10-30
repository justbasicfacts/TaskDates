import { isBefore } from "date-fns";
import { sameOrAfter } from "./sameOrAfter";

export const isRangeBetween = (dateToCheck: Date, startDate: Date, endDate: Date) => {
    return isBefore(startDate, dateToCheck) && sameOrAfter(endDate, dateToCheck);
};
