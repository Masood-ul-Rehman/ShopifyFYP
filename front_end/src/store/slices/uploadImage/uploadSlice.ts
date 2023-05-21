import { createSlice } from "@reduxjs/toolkit";
import { uploadSingleThunk, uploadMultiThunk } from "../../thunks/uploadThunk";

interface MySliceState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isMessage: any;
  filenames: Array<string> | null;
}
const initialState: MySliceState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isMessage: "",
  filenames: null,
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
      .addCase(uploadSingleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filenames = action.payload;
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
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    isMessage: null,
    filenames: null,
  },
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
        // state.isMessage = action.payload;
      });
  },
});
export const selectIsLoading = (state: any) => state.multiUploadSlice.isLoading;
export const selectImages = (state: any) => state.multiUploadSlice.filenames;

export const singleUpload = singleUploadSlice.reducer;
export const multiUpload = MultieUploadSlice.reducer;

export * from "../../thunks/uploadThunk";
