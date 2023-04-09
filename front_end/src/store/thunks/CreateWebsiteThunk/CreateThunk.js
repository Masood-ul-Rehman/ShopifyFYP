import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateService } from "../../slices/CreateWebsite/CreateService";
const NewWebsiteThunk = createAsyncThunk(
  "create/createWeb",
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await CreateService(user, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export { NewWebsiteThunk };
