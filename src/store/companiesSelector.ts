import { RootState } from "./store";

export const companiesSelector = (state: RootState) =>
  state.meetingPlans;
