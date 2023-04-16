import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './style.css';
import LoadAnim from '../../shared/ui/load/LoadAnim';
import LayerCards from '../../layers/LayerCards/LayerCards';
import {
  useGetPlanetsForPageMidlware,
  useSearchPlanetMidlware,
} from '../../api/services/PlanetApi';
import { useSelector } from 'react-redux';

type RootState = {
  search: string;
};

function Home() {
  const searchText = useSelector<RootState, string>((state) => state.search);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, isLoading, error } = useGetPlanetsForPageMidlware(pageNumber);

  const searchData = useSearchPlanetMidlware(searchText);

  const handlePage = async (val: number) => {
    setPageNumber(val);
  };

  return (
    <main className="main">
      <SearchBar />
      {isLoading ? (
        <LoadAnim />
      ) : error ? (
        'Error'
      ) : (
        <LayerCards
          items={searchText.length <= 0 ? data?.results : searchData.data}
          maxPageCount={data?.counts || 1}
          callback={handlePage}
        />
      )}
    </main>
  );
}

export default Home;
