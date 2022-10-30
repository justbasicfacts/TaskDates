import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyUI } from "../../shared/types/modals/CompanyUI";
import { SelectedTimeSlot } from "../../shared/types/modals/SelectedTimeSlot";
import { getCompanies } from "../actions";
import { generateCompanyUIList } from "../../utils/generateCompanyUIList";

const initialState: CompaniesInitialState = {
  companies: [] as CompanyUI[],
  selectedTimeSlots: [] as SelectedTimeSlot[],
};

export interface CompaniesInitialState {
  companies: CompanyUI[];
  selectedTimeSlots: SelectedTimeSlot[];
}

const companiesSlice = createSlice({
  name: "meetingPlans",
  initialState,
  reducers: {
    selectTimeSlot: (state, action: PayloadAction<SelectedTimeSlot>) => {
      const selectedTimeSlotIndex = state.selectedTimeSlots.findIndex(
        (timeSlot) => timeSlot.companyId === action.payload.companyId
      );
      const selectedSlot = {
        companyId: action.payload.companyId,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
        day: action.payload.day,
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
    });

    builder.addCase(getCompanies.fulfilled, (state, { payload }) => {
      const companyUIList = generateCompanyUIList(payload);
      state.companies = companyUIList;
    });

    builder.addCase(getCompanies.rejected, (state) => {
      state.companies = [] as CompanyUI[];
      state.selectedTimeSlots = [] as SelectedTimeSlot[];
    });
  },
});

export default companiesSlice;
