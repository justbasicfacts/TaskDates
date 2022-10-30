import { combineReducers } from "@reduxjs/toolkit";
import companiesSlice from "./companiesSlice/companiesReducer";

export const reducers = {
  meetingPlans: companiesSlice.reducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
