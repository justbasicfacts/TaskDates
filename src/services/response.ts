import { AxiosError, AxiosResponse } from "axios";

export const handleResponse = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

export const handleError = (error: AxiosError) => {
  throw error;
};
