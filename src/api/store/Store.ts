import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../slices/search.slice';
import { planetApi } from '../services/PlanetApi';

export const store = configureStore({
  reducer: { [planetApi.reducerPath]: planetApi.reducer, search: searchSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetApi.middleware),
});

export type StoreStateType = ReturnType<typeof store.getState>;
