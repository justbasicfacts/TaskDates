import { format } from "date-fns";

export const getFormattedTime = (startTime: string) => {
  return format(new Date(startTime), "kk:mm");
};
