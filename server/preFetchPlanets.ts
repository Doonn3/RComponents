import PLANETS_INFO from '../src/api/common/common.planets.info';
import PlanetType from '../src/api/types/PlanetType';

async function preFetchPlanets(): Promise<PlanetType[]> {
  const res = await fetch('https://swapi.dev/api/planets/?3=&page=1');

  const data = await res.json();
  const planets = additionalData(data.results);
  return planets;
}

export default preFetchPlanets;

type obj = { [key: string]: { urlImg: string; descriptions?: string } };

function additionalData(data: PlanetType[]): PlanetType[] {
  const planetsData: PlanetType[] = [];
  for (let i = 0; i < data.length; i++) {
    const planet = data[i];

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
