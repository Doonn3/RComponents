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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPlanets } from '../../store/slices/preLoadState.slice';

function Home() {
  const dispatch = useDispatch();
  const initialState = useSelector((state: StoreStateType) => state.planets);
  const searchState = useSelector((state: StoreStateType) => state.search);
  const pageNumber = useSelector((state: StoreStateType) => state.pageNumber);

  const planetsData = useGetPlanetsForPageMidlware(pageNumber.saveNumber || 1);
  const searchData = useSearchPlanetMidlware(searchState.saveText || '');

  useEffect(() => {
    if (planetsData.data === undefined || initialState.data === undefined) return;

    if (JSON.stringify(initialState.data) !== JSON.stringify(planetsData.data.results)) {
      dispatch(setPlanets(planetsData.data.results));
    }
  }, [planetsData, dispatch, initialState.data]);

  const items =
    searchState.submitText.length <= 0 || searchState.submitText === undefined
      ? initialState.data
      : searchData.data;

  return (
    <main className="main">
      <SearchBar />
      <LayerCards
        items={items}
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
