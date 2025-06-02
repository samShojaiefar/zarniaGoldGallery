import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.mclp.ir/api/v1",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
