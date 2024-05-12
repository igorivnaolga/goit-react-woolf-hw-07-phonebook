import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filterPhone(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterPhone } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
