import { CompanyUI, SelectedTimeSlot } from "../shared/types";

export const initialMockState = {
  meetingPlans: {
    companies: [] as CompanyUI[],
    selectedTimeSlots: [] as SelectedTimeSlot[],
  },
};
