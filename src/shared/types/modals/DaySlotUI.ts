import { TimeSlotUI } from "./TimeSlotUI";

export interface DaySlotUI {
  companyId: number;
  day: string;
  slots: TimeSlotUI[];
}
