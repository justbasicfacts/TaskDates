import axios from "axios";

import { handleError, handleResponse } from "./response";

const axiosInstance = axios.create();
const addApiPrefix = (url: string) => {
  return `http://localhost:3000/${url}`;
};

const getAll = <R>(url: string): Promise<R[]> => {
  return axiosInstance
    .get<R[]>(`${addApiPrefix(url)}`)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
};
