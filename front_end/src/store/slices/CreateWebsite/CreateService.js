import axios from "axios";

const API_URL = "/api/details/s";

const CreateWebsite = async (data) => {
  const response = await axios.post(API_URL, data);
  if (response.data) {
    console.log("Sent data to database");
  }
  return response.data;
};
export const CreateService = {
  CreateWebsite,
};
