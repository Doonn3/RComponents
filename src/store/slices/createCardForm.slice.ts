import { createSlice } from '@reduxjs/toolkit';
import { CardFormPropsType } from '../../components/CardForm/CardForm';

type SliceType = {
  cards: CardFormPropsType[];
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
