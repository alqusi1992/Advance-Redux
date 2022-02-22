import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemFromCart: (state, action) => {
      const newItem = action.payload;
      const exitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exitingItem.quantity += 1;
        exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const exitingItem = state.items.find((i) => i.id === id);
      state.totalQuantity--;
      if (exitingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        exitingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
