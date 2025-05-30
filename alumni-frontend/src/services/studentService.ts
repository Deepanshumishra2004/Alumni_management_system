// src/services/studentService.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend URL
});

// Add auth token to headers automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchStudentProfile = async () => {
  const response = await API.get("/students/profile");
  return response.data;
};

export default API;
