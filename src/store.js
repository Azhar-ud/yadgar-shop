import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";
import alertReducer from "./slices/alertSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert: alertReducer,
  },
});
