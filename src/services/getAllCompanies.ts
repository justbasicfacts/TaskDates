import { Company } from "../shared/types/api";
import { apiProvider } from "./apiProvider";

export const getAllCompanies = () => apiProvider.getAll<Company>("companies");
