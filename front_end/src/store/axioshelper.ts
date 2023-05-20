import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});
const addBearerToken = (config: any) => {
  let token = localStorage.getItem("token"); // Retrieve the token from wherever you store it (e.g., localStorage, Redux store, etc.)
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};
axiosInstance.interceptors.request.use(addBearerToken, (error) => {
  return Promise.reject(error);
});
export default axiosInstance;
