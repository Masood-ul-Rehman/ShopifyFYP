import axiosInstance from "../../axioshelper";
const API_URL = "http://localhost:5000/api";

const uploadSingle = async (image: string) => {
  const response = await axiosInstance.post(`${API_URL}/image/upload`, image);

  return response.data;
};
const uploadMulti = async (image: Array<String>) => {
  const response = await axiosInstance.post(
    `${API_URL}/image/upload-multiple`,
    image
  );

  return response.data;
};
export const ProductService = {
  uploadSingle,
  uploadMulti,
};
