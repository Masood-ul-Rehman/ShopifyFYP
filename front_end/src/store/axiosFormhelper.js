import axios from "axios";

const axiosForm = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const addBearerToken = (config) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

axiosForm.interceptors.request.use(addBearerToken, (error) => {
  return Promise.reject(error);
});

export default axiosForm;
