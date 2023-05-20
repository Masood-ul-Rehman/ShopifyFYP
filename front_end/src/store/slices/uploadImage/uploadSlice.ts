import { createSlice } from "@reduxjs/toolkit";
import { uploadSingleThunk, uploadMultiThunk } from "../../thunks/uploadThunk";

interface MySliceState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isMessage: any;
}
const initialState: MySliceState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isMessage: "",
};

const singleUploadSlice = createSlice({
  name: "singleUploadSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadSingleThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadSingleThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(uploadSingleThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.payload;
      });
  },
});
const MultieUploadSlice = createSlice({
  name: "multiUploadSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadMultiThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadMultiThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(uploadMultiThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.payload;
      });
  },
});
export const singleUpload = singleUploadSlice.reducer;
export const multiUpload = MultieUploadSlice.reducer;

export * from "../../thunks/uploadThunk";
