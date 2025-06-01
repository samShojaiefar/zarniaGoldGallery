import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://Api.mclp.ir/api/v1",
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default axiosInstance;
