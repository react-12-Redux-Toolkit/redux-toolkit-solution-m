import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui_slice';
import cartSlice from './cart_slice';

const store = configureStore({
  reducer: {
    cartToggle: uiSlice.reducer,
    productsInCart: cartSlice.reducer
  }
});

export default store;
export const cartActions = uiSlice.actions;
export const productsInCartActions = cartSlice.actions;
