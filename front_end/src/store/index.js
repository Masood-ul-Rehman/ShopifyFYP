import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";

import { modalReducer, openModal, closeModal } from "./slices/modal/modalSlice";
import { addProduct } from "./slices/Products/ProductSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: addProduct,
    // createWebsite: websiteSlice,
    modal: modalReducer,
  },
});
export * from "./slices/auth/AuthSlice";
export * from "./slices/modal/modalSlice";
export * from "./thunks/ProductsThunk.ts";
