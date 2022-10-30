import { TimeSlot } from "./TimeSlot";

export interface Company {
  id: number;
  name: string;
  type: string;
  time_slots?: TimeSlot[] | null;
}
