import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import './style.css';

interface ISearchResult {
  searchResult: (value: string) => void;
}

function SearchBar(props?: ISearchResult) {
  const localKey = 'search-bar';
  const [value, setValue] = useState<string>(localStorage.getItem(localKey) || '');

  useEffect(() => {
    localStorage.setItem(localKey, value || '');
  });

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.value;
    setValue(val);
    if (!props?.searchResult) return;
    if (val.length <= 0) {
      props.searchResult(val);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length <= 0) return;
    if (props?.searchResult) {
      props.searchResult(value);
    }
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
