import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'productsInCart',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      let item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        ++item.quantity;
        item.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      ++state.totalQuantity;
    },
    removeItemFromCart(state, action) {
      let item = state.items.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        --item.quantity;
        item.totalPrice -= item.price;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      --state.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
