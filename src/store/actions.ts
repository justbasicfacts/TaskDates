import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCompanies } from "../services/getAllCompanies";

const getCompanies = createAsyncThunk("companies/getCompanies", async () => {
  const data = await getAllCompanies();
  return data;
});

export { getCompanies };
