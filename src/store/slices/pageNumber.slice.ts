import { createSlice } from '@reduxjs/toolkit';

const pageNumber = createSlice({
  name: 'page-number',
  initialState: {
    saveNumber: 1,
  },
  reducers: {
    setNumber: (state, action) => {
      state.saveNumber = action.payload;
    },
  },
});

export const { setNumber } = pageNumber.actions;
export default pageNumber.reducer;
