import axiosInstance from "../store/axioshelper";
import "react-toastify/dist/ReactToastify.css";
import axiosForm from "../store/axiosFormhelper";
import { ToastContainer, toast } from "react-toastify";
export const API_URL = "http://localhost:5000";
const User = localStorage.getItem("user");
const user = User?.slice(1);
export const fuser = user?.slice(0, -1);
const store_id = localStorage.getItem("store");

export const getProducts = async () => {
  try {
    const response = axiosInstance.post(`${API_URL}/api/product`, {
      store_id,
    });
    return response;
  } catch (error) {
    toast.error("Error getting Products:", error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = axiosInstance
      .delete(`${API_URL}/api/product/${id}`)
      .then(() => {
        toast.success("Deleted Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    return response;
  } catch (error) {
    toast.error("Error deleting:", error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
