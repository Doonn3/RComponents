import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    saveText: '',
    submitText: '',
  },
  reducers: {
    setSubmit: (state) => {
      state.submitText = state.saveText;
    },
    setSaveText: (state, action) => {
      state.saveText = action.payload;
    },
  },
});

export const { setSubmit, setSaveText } = searchSlice.actions;
export default searchSlice.reducer;
