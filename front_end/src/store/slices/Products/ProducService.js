import axios from "axios";
import axiosInstance from "../../axioshelper";
const API_URL = "http://localhost:5000/api/product";

const User = localStorage.getItem("user");
const addnewProduct = async (data) => {
  const user = User.slice(1);
  const fuser = user.slice(0, -1);
  const fdata = {
    User: fuser,
    ...data,
  };

  const response = await axiosInstance.post(`${API_URL}/addProduct`, fdata);

  return response.data;
};

// const addnewProduct = async (data: inputData) => {
//   const fdata = {
//     User,
//     ...data,
//   };
//   const response = await axiosInstance.post(`${API_URL}addProduct`, fdata);
//   return response.data;
// };
const updateProduct = async (id, data) => {
  const response = await axiosInstance.put(`${API_URL}/${id}`, data);
};
export const ProductService = {
  addnewProduct,
  updateProduct,
};
