import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
const addBearerToken = (config: any) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data;",
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};
axiosInstance.interceptors.request.use(addBearerToken, (error) => {
  return Promise.reject(error);
});
export default axiosInstance;
