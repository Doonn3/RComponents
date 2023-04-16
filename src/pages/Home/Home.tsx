import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './style.css';
import LoadAnim from '../../shared/ui/load/LoadAnim';
import PlanetsApi from '../../api/PlanetsApi';
import PlanetType from 'api/types/PlanetType';
import LayerCards from '../../layers/LayerCards/LayerCards';
import {
  useGetPlanetsForPageMidlware,
  useSearchPlanetMidlware,
} from '../../api/services/PlanetApi';
import { useStore } from 'react-redux';
import { useSelector } from 'react-redux';

function Home() {
  const store = useStore();
  // const [data, setData] = useState<PlanetType[]>([]);
  // const [counts, setCount] = useState<string>();
  const searchString = useSelector<string>((state) => state.search);
  // const [isLoader, setLoader] = useState<boolean>(true);
  // const [query, setQuery] = useState<string>(localStorage.getItem('search-bar') || '');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, isLoading, error } = useGetPlanetsForPageMidlware(pageNumber);

  const [search, setSearch] = useState<string>('');
  const searchData = useSearchPlanetMidlware(search);
  // useEffect(() => {
  //   (async () => {
  //     // setLoader(true);
  //     // if (query.length > 0) {
  //       // searchResult(query);
  //     // } else {
  //       const data = await getData();
  //       if (data === null) {
  //         // setLoader(false);
  //         return;
  //       // }
  //       // setCount(data.counts);
  //       // setData(data.items);
  //     // }
  //     // setLoader(false);
  //   })();
  // }, []);

  const searchResult = async (value: string) => {
    setSearch(searchString as string);
    // setSearch(value);
    // setLoader(true);
    // setQuery(value);
    // if (value.length <= 0) {
    // const data = await getData();
    // if (data === null) {
    // setLoader(false);
    // return;
    // }
    // setData(data.items);
    // setLoader(false);
    // return;
    // }
    // const planets: PlanetType[] | null = await PlanetsApi.instance.getSearchPlanets(value);
    // if (planets === null) return;
    // setData(planets);
    // setLoader(false);
  };

  const handlePage = async (val: number) => {
    setPageNumber(val);
  };

  return (
    <main className="main">
      <SearchBar searchResult={searchResult} />
      {isLoading ? (
        <LoadAnim />
      ) : error ? (
        'Error'
      ) : (
        <LayerCards
          items={search.length <= 0 ? data?.results : searchData.data}
          maxPageCount={data?.counts || 1}
          callback={handlePage}
        />
      )}
    </main>
  );
}

export default Home;
