import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: "",
  reducers: {
    setAlert(state, action) {
      return action.payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;

export const alertThunk = (message, time) => {
  return async (dispatch) => {
    dispatch(setAlert(message));
    setTimeout(() => {
      dispatch(setAlert(null));
    }, time * 1000);
  };
};

export default alertSlice.reducer;
