import axios from "axios";
import { authStore } from "@/features/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((req) => {
  const token = authStore.idToken;
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
