import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './style.css';
import LoadAnim from '../../shared/ui/load/LoadAnim';
import PlanetsApi from '../../api/PlanetsApi';
import PlanetType from 'api/types/PlanetType';
import LayerCards from '../../layers/LayerCards/LayerCards';

function Home() {
  const [data, setData] = useState<PlanetType[]>([]);
  const [counts, setCount] = useState<string>('1');

  const [isLoader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoader(true);
      const data = await getData();
      setCount(data.counts);
      setData(data.items);
      setLoader(false);
    })();
  }, []);

  const searchResult = async (value: string) => {
    setLoader(true);
    if (value.length <= 0) {
      const data = await getData();
      setData(data.items);
      setLoader(false);
      return;
    }
    const planets: PlanetType[] = await PlanetsApi.instance.getSearchPlanets(value);
    setData(planets);
    setLoader(false);
  };

  const handlePage = async (val: number) => {
    setLoader(true);
    const data = await getData(String(val));
    setData(data.items);
    setCount(data.counts);
    setLoader(false);
  };

  return (
    <main className="main">
      <SearchBar searchResult={searchResult} />
      <LayerCards items={data} pageCount={counts} callback={handlePage} />
      {isLoader ? <LoadAnim /> : ''}
    </main>
  );
}

async function getData(val = ''): Promise<{ items: PlanetType[]; counts: string }> {
  const data = await PlanetsApi.instance.getAllPlanets(val);

  const planets: PlanetType[] = data.items;
  const counts = data.counts;

  return { items: planets, counts };
}

export default Home;
