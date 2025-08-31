import { createSlice } from "@reduxjs/toolkit";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../services/localStorage";

const initialState = loadFromLocalStorage("cart") || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.find((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                price: item.price + action.payload.price,
              }
            : item
        );
      }
      state.push(action.payload);
      console.log(state);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

//THUNKS

export const addToCartThunk = (item) => (dispatch, getState) => {
  dispatch(addToCart(item));
  saveToLocalStorage("cart", getState().cart);
};

export const removeFromCartThunk = (id) => (dispatch, getState) => {
  dispatch(removeFromCart(id));
  saveToLocalStorage("cart", getState().cart);
};
