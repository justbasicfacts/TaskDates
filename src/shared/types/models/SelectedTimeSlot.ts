import { TimeSlotUI } from "./TimeSlotUI";

export interface SelectedTimeSlot extends TimeSlotUI {
  companyId: number;
  day: string;
}
