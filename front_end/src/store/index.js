import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";
<<<<<<< HEAD
import { websiteSlice } from "./slices/CreateWebsite/newWebsiteSlice";
import { addProductReducer } from "./slices/product/addProduct";

import { modalReducer ,openModal, closeModal } from "./slices/modal/modalSlice";



=======
// import { websiteSlice } from "./slices/CreateWebsite/newWebsiteSlice";
import { modalReducer, openModal, closeModal } from "./slices/modal/modalSlice";
import { addProduct } from "./slices/Products/ProductSlice";
>>>>>>> 1c4d97e84c5bf71b64be10f9be8def85559ea299
export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: addProduct,
    // createWebsite: websiteSlice,
    modal: modalReducer,
    products: addProductReducer,
  },
});
export * from "./slices/auth/AuthSlice";
export * from "./slices/Products/ProductSlice";
// export * from "./slices/CreateWebsite/newWebsiteSlice";
export * from "./slices/modal/modalSlice";
export * from "./thunks/addProduct/addProduct";
