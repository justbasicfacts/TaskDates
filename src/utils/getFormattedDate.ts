import format from "date-fns/format";
import { enUS } from "date-fns/locale";

export const getFormattedDate = (date: string) => {
  return format(new Date(date), "MM/dd/yyyy", { locale: enUS });
};
