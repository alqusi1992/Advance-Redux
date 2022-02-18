import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { carteVisibile: false },
  reducers: {
    toggleCarte: (state) => {
      state.carteVisibile = !state.carteVisibile;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
