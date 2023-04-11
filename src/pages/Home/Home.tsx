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
  const [query, setQuery] = useState<string>(localStorage.getItem('search-bar') || '');

  useEffect(() => {
    (async () => {
      setLoader(true);
      if (query.length > 0) {
        searchResult(query);
      } else {
        const data = await getData();
        if (data === null) {
          setLoader(false);
          return;
        }
        setCount(data.counts);
        setData(data.items);
      }
      setLoader(false);
    })();
  }, [query]);

  const searchResult = async (value: string) => {
    setLoader(true);
    setQuery(value);
    if (value.length <= 0) {
      const data = await getData();
      if (data === null) {
        setLoader(false);
        return;
      }
      setData(data.items);
      setLoader(false);
      return;
    }
    const planets: PlanetType[] | null = await PlanetsApi.instance.getSearchPlanets(value);
    if (planets === null) return;
    setData(planets);
    setLoader(false);
  };

  const handlePage = async (val: number) => {
    setLoader(true);
    const data = await getData(String(val));
    if (data === null) {
      setLoader(false);
      return;
    }
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

async function getData(val = ''): Promise<{ items: PlanetType[]; counts: string } | null> {
  const data = await PlanetsApi.instance.getAllPlanets(val);
  if (data === null) return null;
  const planets: PlanetType[] = data.items;
  const counts = data.counts;

  return { items: planets, counts };
}

export default Home;
