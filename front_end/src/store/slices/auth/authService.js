import axios from "axios";

const API_URL = "/api/users/";
//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data._id));
  }
  return response.data;
};

//logout user

const logout = () => {
  localStorage.removeItem("user");
};

//login

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data._id));
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
