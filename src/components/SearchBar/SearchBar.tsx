import { useState, useEffect, useCallback } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import './style.css';

function SearchBar() {
  const localKey = 'search-bar';
  const [value, setValue] = useState<string>('');

  const mount = () => {
    const val = localStorage.getItem(localKey);
    if (val !== null) {
      setValue(val);
    }
  };

  const unmount = useCallback(() => {
    localStorage.setItem(localKey, value);
  }, [localKey, value]);

  useEffect(() => {
    mount();
  }, [localKey]);

  useEffect(() => {
    unmount();
  }, [unmount]);

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.value;
    setValue(val);
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
      />
    </div>
  );
}

export default SearchBar;
