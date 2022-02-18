import { createSlice } from '@reduxjs/toolkit';

createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemFromCart: (state, action) => {
      const { item } = action.payload;
      const { items } = state;
      const existingItem = items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeItemFromCart: (state, action) => {
      const { item } = action.payload;
      const { items } = state;
      const existingItem = items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          items.splice(items.indexOf(existingItem), 1);
        }
      }
      state.totalQuantity -= 1;
    },
  },
});
