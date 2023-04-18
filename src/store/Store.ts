import { configureStore } from '@reduxjs/toolkit';
import { planetApi } from '../api/services/PlanetApi';
import searchSlice from './slices/search.slice';
import pageNumberSlice from './slices/pageNumber.slice';
import createCardFormSlice from './slices/createCardForm.slice';

export const store = configureStore({
  reducer: {
    [planetApi.reducerPath]: planetApi.reducer,
    search: searchSlice,
    pageNumber: pageNumberSlice,
    formCards: createCardFormSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetApi.middleware),
});

export type StoreStateType = ReturnType<typeof store.getState>;
