import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "",
  },
});

const addBearerToken = (config: any) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  if (config.data && !(config.data instanceof FormData)) {
    delete config.headers["Content-Type"];
  }
  return config;
};

axiosInstance.interceptors.request.use(addBearerToken, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
