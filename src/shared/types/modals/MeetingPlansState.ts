import { CompanyUI, SelectedTimeSlot } from "..";


export interface MeetingPlansState {
  companies: CompanyUI[];
  selectedTimeSlots: SelectedTimeSlot[];
  status: "pending" | "complete";
}
