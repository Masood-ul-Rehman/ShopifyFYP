import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";
import { websiteSlice } from "./slices/CreateWebsite/createSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    createWebsite: websiteSlice,
  },
});
export * from "./slices/auth/AuthSlice";
export * from "./slices/CreateWebsite/createSlice";
