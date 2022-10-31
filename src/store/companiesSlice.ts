import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyUI, SelectedTimeSlot } from "../shared/types";
import { generateCompanyUIList } from "../utils";
import { getCompanies } from "./actions";
import { MeetingPlansState } from "../shared/types/models/MeetingPlansState";

const initialState: MeetingPlansState = {
  companies: [] as CompanyUI[],
  selectedTimeSlots: [] as SelectedTimeSlot[],
  status: "pending",
};

export const companiesSlice = createSlice({
  name: "meetingPlans",
  initialState,
  reducers: {
    selectTimeSlot: (state, action: PayloadAction<SelectedTimeSlot>) => {
      const { companyId, startTime, endTime, day } = action.payload;

      const selectedTimeSlotIndex = state.selectedTimeSlots.findIndex(
        (timeSlot) => timeSlot.companyId === companyId
      );

      const selectedSlot = {
        companyId,
        startTime,
        endTime,
        day,
      };

      if (selectedTimeSlotIndex > -1) {
        state.selectedTimeSlots[selectedTimeSlotIndex] = selectedSlot;
      } else {
        state.selectedTimeSlots.push(selectedSlot);
      }
    },
    removeTimeSlot: (state, action: PayloadAction<SelectedTimeSlot>) => {
      const selectedTimeSlotIndex = state.selectedTimeSlots.findIndex(
        (timeSlot) => timeSlot.companyId === action.payload.companyId
      );
      state.selectedTimeSlots.splice(selectedTimeSlotIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.companies = [] as CompanyUI[];
      state.selectedTimeSlots = [] as SelectedTimeSlot[];
      state.status = "pending";
    });

    builder.addCase(getCompanies.fulfilled, (state, { payload }) => {
      const companyUIList = generateCompanyUIList(payload);
      state.companies = companyUIList;
      state.status = "complete";
    });

    builder.addCase(getCompanies.rejected, (state) => {
      state.companies = [] as CompanyUI[];
      state.selectedTimeSlots = [] as SelectedTimeSlot[];
      state.status = "pending";
    });
  },
});
