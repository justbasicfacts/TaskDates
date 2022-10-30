import format from "date-fns/format";
import { enUS } from "date-fns/locale";

export const getReadableDay = (date: number | string) => {
  return format(new Date(date), "PPPP", { locale: enUS });
};
