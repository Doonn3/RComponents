import PLANETS_INFO from './common/common.planets.info';
import PlanetType from './types/PlanetType';

interface PlanetsType {
  count: number;
  next: string;
  previous: null;
  results: PlanetType[];
}

type obj = { [key: string]: { urlImg: string; descriptions?: string } };

class PlanetsApi {
  public static instance: PlanetsApi = new PlanetsApi();

  public async getAllPlanets(val = '1'): Promise<{ items: PlanetType[]; counts: string } | null> {
    try {
      const planets = await fetch(`https://swapi.dev/api/planets/?3=&page=${val}`);

      const data = await planets.json();
      const planetsData: PlanetType[] = data.results;
      const counts = data.count;

      for (let i = 0; i < planetsData.length; i++) {
        const planet = planetsData[i];

        if (Object.keys(PLANETS_INFO).includes(planet.name.toLowerCase())) {
          const t: obj = PLANETS_INFO;
          planet.imageUrl = t[planet.name.toLowerCase()].urlImg;
          const desc = t[planet.name.toLowerCase()].descriptions;
          if (desc !== undefined) {
            planet.descriptions = desc;
          }
        }
      }

      return { items: planetsData, counts };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async getSearchPlanets(name: string): Promise<PlanetType[] | null> {
    try {
      const planets = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
      const data: PlanetsType = await planets.json();
      const planetsData: PlanetType[] = data.results;
      for (let i = 0; i < planetsData.length; i++) {
        const planet = planetsData[i];

        if (Object.keys(PLANETS_INFO).includes(planet.name.toLowerCase())) {
          const t: obj = PLANETS_INFO;
          planet.imageUrl = t[planet.name.toLowerCase()].urlImg;
          const desc = t[planet.name.toLowerCase()].descriptions;
          if (desc !== undefined) {
            planet.descriptions = desc;
          }
        }
      }

      return planetsData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default PlanetsApi;
