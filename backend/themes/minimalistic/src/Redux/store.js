import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import appReducer from "./appSlice";
import userReducer from "./userSlice";
import addTocartReducer from "./addToCart";

export default configureStore({
   reducer: {
      app: appReducer,
      cart: cartReducer,
      user: userReducer,
      cartItems: addTocartReducer,
   },
});
