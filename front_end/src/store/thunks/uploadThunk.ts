import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "../slices/uploadImage/UploadService";
const uploadSingleThunk = createAsyncThunk(
  "addProduct/new",
  async (data: string, thunkAPI: any) => {
    try {
      return await ProductService.uploadSingle(data);
    } catch (error: any) {
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
const uploadMultiThunk = createAsyncThunk(
  "addProduct/new",
  async (data: any, thunkAPI: any) => {
    try {
      return await ProductService.uploadMulti(data);
    } catch (error: any) {
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

export { uploadSingleThunk, uploadMultiThunk };
