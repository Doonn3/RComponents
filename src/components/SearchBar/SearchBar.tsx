import { setSearch } from '../../api/slices/search.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import './style.css';

type RootState = {
  search: string;
};

function SearchBar() {
  const dispatch = useDispatch();
  const text = useSelector<RootState, string>((state) => state.search);
  const [value, setValue] = useState<string>(text || '');

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.value;
    dispatch(setSearch(val));
    setValue(val);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text);
    dispatch(setSearch(value));
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <SearchIcon className="search-bar__icon" />
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={changeText}
      />
    </form>
  );
}

export default SearchBar;
