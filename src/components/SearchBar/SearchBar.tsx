import { setSearch } from '../../api/slices/search.slice';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import './style.css';

// interface ISearchResult {
//   searchResult: (value: string) => void;
// }

type RootState = {
  search: string;
};

function SearchBar() {
  // const localKey = 'search-bar';
  // const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();
  const text = useSelector<RootState, string>((state) => state.search);
  const [value, setValue] = useState<string>(text || '');

  // useEffect(() => {
  // localStorage.setItem(localKey, value || '');
  // }, [value]);

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.value;
    // setValue(val);
    dispatch(setSearch(val));
    setValue(val);
    // if (!props?.searchResult) return;
    // if (val.length <= 0) {
    //   props.searchResult(val);
    // }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text);
    // if (value.length <= 0) return;
    // // if (props?.searchResult) {
    // props.searchResult(value);
    // }
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
