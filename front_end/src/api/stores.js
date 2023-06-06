import axiosInstance from "../store/axioshelper";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { fuser, API_URL } from "./product";
console.log(fuser);
export const getStores = async () => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}/api/stores/getStores/${fuser}`
    );
    return response;
  } catch (error) {
    toast.error("Error getting Stores:", error, {
      position: toast.POSITION.TOP_RIGHT,
    });
    throw error;
  }
};
export const storeDetails = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/api/stores/createNew`,
      data
    );
    return response;
  } catch (error) {
    toast.error("Error creating Store:", error, {
      position: toast.POSITION.TOP_RIGHT,
    });
    throw error;
  }
};
export const startStore = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}/api/stores/start/${id}`
    );
    return response;
  } catch (error) {
    toast.error("Error starting Store:", error, {
      position: toast.POSITION.TOP_RIGHT,
    });
    throw error;
  }
};
export const stopServer = async () => {
  const resp = await axiosInstance.get(`${API_URL}/api/stores/stop`);
  return resp;
};
export const getOrders = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}/api/order/getOrders/${id}`
    );
    return response.data;
  } catch (error) {
    toast.error("Error getting Orders:", error, {
      position: toast.POSITION.TOP_RIGHT,
    });
    throw error;
  }
};
