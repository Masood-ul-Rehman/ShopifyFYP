import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";

import { modalReducer } from "./slices/modal/modalSlice";
import { addProduct } from "./slices/Products/ProductSlice";
import { singleUpload, multiUpload } from "./slices/uploadImage/uploadSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: addProduct,
    uploadSingle: singleUpload,
    uploadMulti: multiUpload,
    // createWebsite: websiteSlice,
    modal: modalReducer,
  },
});
export * from "./slices/auth/AuthSlice";
export * from "./slices/modal/modalSlice";
export * from "./thunks/ProductsThunk.ts";
