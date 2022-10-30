import { Company } from "../shared/types/api";
import { getAll } from "./getAll";

export const getAllCompanies = getAll<Company>("companies");
