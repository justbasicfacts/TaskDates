import format from "date-fns/format";
import { enUS } from "date-fns/locale";

export const getReadableDay = (date: number | string) => {
  try {
    return format(new Date(date), "PPPP", { locale: enUS });
  } catch (error) {
    console.log(error);
  }
};
