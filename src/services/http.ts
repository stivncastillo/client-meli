import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "../types";
const apiUrl = process.env.REACT_APP_API_URL;

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json"
  }
});

export const getItems = (query: string): Promise<AxiosResponse<ApiResponse>> => {
  return http.get<ApiResponse>(`items?q=${query}`);
};

export const getItemDetail: any = (id: string) => {
  return http.get<ApiResponse>(`items/${id}`);
};
