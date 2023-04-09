import { createSlice } from "@reduxjs/toolkit";
import { Createnew } from "../../thunks/CreateWebsiteThunk/CreateThunk";
const WebsiteSlice = createSlice({
  name: "createWebsite",
  initialState: {
    isLoading: false,
    isError: null,
    isSuccess: false,
    isMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Createnew.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Createnew.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(Createnew.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.payload;
      });
  },
});
export * from "../../thunks/CreateWebsiteThunk/CreateThunk";
export const websiteSlice = WebsiteSlice.reducer;
