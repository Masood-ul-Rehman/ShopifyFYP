import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";
import { websiteSlice } from "./slices/CreateWebsite/newWebsiteSlice";
import { addProductReducer } from "./slices/product/addProduct";

import { modalReducer ,openModal, closeModal } from "./slices/modal/modalSlice";



export const store = configureStore({
  reducer: {
    auth: authSlice,
    createWebsite: websiteSlice,
    modal: modalReducer,
    products: addProductReducer,
  },
});
export * from "./slices/auth/AuthSlice";
export * from "./slices/CreateWebsite/newWebsiteSlice";
export * from "./slices/modal/modalSlice";
export * from "./thunks/addProduct/addProduct";
