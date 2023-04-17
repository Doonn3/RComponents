import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import PlanetType from 'api/types/PlanetType';
import PLANETS_INFO from '../common/common.planets.info';

interface ResponseType {
  results: PlanetType[];
  count: number;
}

export const planetApi = createApi({
  reducerPath: 'planetApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/planets' }),
  endpoints: (builder) => ({
    getPlanetsForPage: builder.query<ResponseType, number>({
      query: (value: number) => `/?3=&page=${value}`,
      transformResponse: (response: ResponseType) => response,
    }),
    searchPlanet: builder.query<PlanetType[], string>({
      query: (value: string) => `/?search=${value}`,
      transformResponse: (response: ResponseType) => response.results,
    }),
  }),
});

const { useGetPlanetsForPageQuery, useSearchPlanetQuery } = planetApi;

type obj = { [key: string]: { urlImg: string; descriptions?: string } };

export const useGetPlanetsForPageMidlware = (value = 1) => {
  const struct = useGetPlanetsForPageQuery(value);

  if (struct.data === undefined) return struct;
  const planetsData: PlanetType[] = [];
  const counts = struct.data.count;

  for (let i = 0; i < struct.data.results.length; i++) {
    const planet = { ...struct.data.results[i] };

    if (Object.keys(PLANETS_INFO).includes(planet.name.toLowerCase())) {
      const items: obj = PLANETS_INFO;
      const img = items[planet.name.toLowerCase()].urlImg;
      const desc = items[planet.name.toLowerCase()].descriptions;
      planet.imageUrl = img;

      if (desc !== undefined) {
        planet.descriptions = desc;
      }
    }
    planetsData.push(planet);
  }

  const returnStruct = {
    data: {
      results: planetsData,
      count: counts,
    },
    isLoading: struct.isLoading,
    error: struct.error,
  };

  return returnStruct;
};

export const useSearchPlanetMidlware = (name: string) => {
  const struct = useSearchPlanetQuery(name);
  if (struct.data === undefined) return struct;

  const searchItems = additionalData(struct.data);

  const returnStruct = {
    data: searchItems,
    isLoading: struct.isLoading,
    error: struct.error,
  };

  return returnStruct;
};

function additionalData(data: PlanetType[]) {
  const planetsData: PlanetType[] = [];

  for (let i = 0; i < data.length; i++) {
    const planet = { ...data[i] };

    if (Object.keys(PLANETS_INFO).includes(planet.name.toLowerCase())) {
      const items: obj = PLANETS_INFO;
      const img = items[planet.name.toLowerCase()].urlImg;
      const desc = items[planet.name.toLowerCase()].descriptions;
      planet.imageUrl = img;

      if (desc !== undefined) {
        planet.descriptions = desc;
      }
    }
    planetsData.push(planet);
  }

  return planetsData;
}
