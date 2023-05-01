import { setSaveText, setSubmit } from '../../store/slices/search.slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import { StoreStateType } from '../../store/Store';
import './style.css';

function SearchBar() {
  const dispatch = useDispatch();
  const searchState = useSelector((state: StoreStateType) => state.search);

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.value;
    dispatch(setSaveText(val));
    if (val.length <= 0) {
      dispatch(setSubmit());
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSubmit());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <SearchIcon className="search-bar__icon" />
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search"
        value={searchState.saveText}
        onChange={changeText}
      />
    </form>
  );
}

export default SearchBar;
