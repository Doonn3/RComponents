import SearchBar from '../../components/SearchBar/SearchBar';
import './style.css';
import LoadAnim from '../../shared/ui/load/LoadAnim';
import LayerCards from '../../layers/LayerCards/LayerCards';
import {
  useGetPlanetsForPageMidlware,
  useSearchPlanetMidlware,
} from '../../api/services/PlanetApi';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../store/Store';

function Home() {
  const searchState = useSelector((state: StoreStateType) => state.search);
  const pageNumber = useSelector((state: StoreStateType) => state.pageNumber);

  const planetsData = useGetPlanetsForPageMidlware(pageNumber.saveNumber);
  const searchData = useSearchPlanetMidlware(searchState.submitText);

  return (
    <main className="main">
      <SearchBar />
      <LayerCards
        items={searchState.submitText.length <= 0 ? planetsData.data?.results : searchData.data}
        maxPageCount={planetsData.data === undefined ? 1 : planetsData.data.count}
      />
      {planetsData.isLoading || searchData.isLoading ? (
        <LoadAnim />
      ) : planetsData.error ? (
        'Error'
      ) : (
        ''
      )}
    </main>
  );
}

export default Home;
