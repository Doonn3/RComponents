import { createSlice } from '@reduxjs/toolkit';

type SliceType = {
  cards: JSX.Element[];
};

const initialState: SliceType = {
  cards: [],
};

const createCardForm = createSlice({
  name: 'createCardForm',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = createCardForm.actions;
export default createCardForm.reducer;
