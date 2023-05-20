// import { createSlice } from "@reduxjs/toolkit";
// import { NewWebsiteThunk } from "../../thunks/CreateThunk";
// const WebsiteSlice = createSlice({
//   name: "createWebsite",
//   initialState: {
//     isLoading: false,
//     isError: null,
//     isSuccess: false,
//     isMessage: "",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(NewWebsiteThunk.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(NewWebsiteThunk.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       })
//       .addCase(NewWebsiteThunk.rejected, (state, action) => {
//         state.isError = true;
//         state.isLoading = false;
//         state.isMessage = action.payload;
//       });
//   },
// });
// export * from "../../thunks/CreateThunk";
// export const websiteSlice = WebsiteSlice.reducer;
