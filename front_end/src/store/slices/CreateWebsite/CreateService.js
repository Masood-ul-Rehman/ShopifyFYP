import axios from "axios";

const API_URL = "/api/details/s";

const CreateService = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, data, token);
  if (response.data) {
    console.log(response.data);
  }
  return response.data;
};
export { CreateService };
