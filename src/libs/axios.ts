import { apiEndpoint } from "@/config";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: apiEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
});
