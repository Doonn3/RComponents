import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PlanetType from '../../api/types/PlanetType';

type PlanetsState = {
  data: PlanetType[];
};

const initialState: PlanetsState = {
  data: [],
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    addPlanet: (state, action: PayloadAction<PlanetType>) => {
      state.data.push(action.payload);
    },
    setPlanets: (state, action: PayloadAction<PlanetType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addPlanet, setPlanets } = planetsSlice.actions;
export default planetsSlice.reducer;
