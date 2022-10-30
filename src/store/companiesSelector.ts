import { InitialState } from "./initialState";
import { RootState } from "./store";

export const companiesSelector = (state: RootState): InitialState =>
  state.meetingPlans;
