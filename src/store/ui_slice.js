import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsVisible: false,
};

export const uiSlice = createSlice({
  name: 'cartToggle',
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
