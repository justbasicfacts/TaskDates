import { isAfter, isSameSecond } from "date-fns";

export const sameOrAfter = (date1: Date, date2: Date) => {
    return isSameSecond(date1, date2)
        ? true
        : isAfter(date1, date2)
            ? true
            : false;
};
