import { RootState } from "../store";
import { CompaniesInitialState } from "./companiesReducer";

export const companiesSelector = (state: RootState): CompaniesInitialState =>
  state.meetingPlans;
