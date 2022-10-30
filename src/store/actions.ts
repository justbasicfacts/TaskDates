import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCompanies } from "../services/getAllCompanies";

const getCompanies = createAsyncThunk("companies/getCompanies", async () => {
  try {
    return await getAllCompanies;
  } catch (error: unknown) {
    console.log(
      `an error occured while getting companies data: ${JSON.stringify(error)}`
    );
    throw error;
  }
});

export { getCompanies };
