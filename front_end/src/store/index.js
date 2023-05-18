import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";
// import { websiteSlice } from "./slices/CreateWebsite/newWebsiteSlice";
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
export * from "./slices/Products/ProductSlice";
// export * from "./slices/CreateWebsite/newWebsiteSlice";
export * from "./slices/modal/modalSlice";
