import axiosInstance from "../store/axioshelper";
const API_URL = "http://localhost:5000";
const User = localStorage.getItem("user");
const user = User?.slice(1);
const fuser = user?.slice(0, -1);
export const getProducts = async () => {
  const response = axiosInstance.get(`${API_URL}/api/product`, fuser);
  return response.data;
};
