import { configureStore } from '@reduxjs/toolkit';
import { planetApi } from '../api/services/PlanetApi';
import searchSlice from './slices/search.slice';
import pageNumberSlice from './slices/pageNumber.slice';
import createCardFormSlice from './slices/createCardForm.slice';
import planetsSlice from './slices/preLoadState.slice';

export function createConfiguredStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      [planetApi.reducerPath]: planetApi.reducer,
      search: searchSlice,
      pageNumber: pageNumberSlice,
      formCards: createCardFormSlice,
      planets: planetsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(planetApi.middleware),
    preloadedState,
  });
  return store;
}

const store = createConfiguredStore();
export type StoreStateType = ReturnType<typeof store.getState>;
