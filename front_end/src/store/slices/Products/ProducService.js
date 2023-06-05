import axiosInstance from "../../axioshelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = "http://localhost:5000/api/product";

const User = localStorage.getItem("user");
const addnewProduct = async (data) => {
  const user = User.slice(1);
  const fuser = user.slice(0, -1);
  const store = localStorage.getItem("store");

  const fdata = {
    User: fuser,
    store: store,
    ...data,
  };
  console.log(JSON.stringify(fdata));

  try {
    const response = await axiosInstance.post(`${API_URL}/addProduct`, fdata);
    toast.success("Successfully added product!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return response.data;
  } catch (error) {
    toast.error("error in adding the product", {
      position: toast.POSITION.TOP_RIGHT,
    });
    throw error;
  }
};

const updateProduct = async (id, data) => {
  const response = await axiosInstance.put(`${API_URL}/${id}`, data);
};
export const ProductService = {
  addnewProduct,
  updateProduct,
};
