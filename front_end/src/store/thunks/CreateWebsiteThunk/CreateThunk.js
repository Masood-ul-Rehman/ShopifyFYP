import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateWebsite } from "../../slices/CreateWebsite/CreateService";
const Createnew = createAsyncThunk("createWeb", async (user, thunkAPI) => {
  try {
    return await CreateWebsite.register(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export { Createnew };
