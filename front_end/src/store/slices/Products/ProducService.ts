import axios from "axios";
import axiosInstance from "../../axioshelper";
const API_URL = "product/";
interface inputData {
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  sold: number;
  colors: string;
  image: HTMLImageElement;
}
const User = localStorage.getItem("user");

const addnewProduct = async (data: inputData) => {
  const fdata = {
    User: User,
    ...data,
  };
  const response = await axiosInstance.post(`${API_URL}addProduct`, fdata);
  return response.data;
};
const updateProduct = async (id: string, data: inputData) => {
  const response = await axiosInstance.put(`${API_URL}/${id}`, data);
};
export const ProductService = {
  addnewProduct,
  updateProduct,
};
