import { useState, useEffect } from 'react';
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
    if (props?.searchResult) {
      props.searchResult(val);
    }
  };

  const handleSubmit = () => {
    if (value.length <= 0) return;
    if (props?.searchResult) {
      props.searchResult(value);
    }
  };

  return (
    <div className="search-bar">
      <SearchIcon className="search-bar__icon" />
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={changeText}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default SearchBar;
