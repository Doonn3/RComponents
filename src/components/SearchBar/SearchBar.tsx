import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import './style.css';

class SearchBar extends React.Component<object, { value: string }> {
  private localKey = 'search-bar';

  public constructor(props = {}) {
    super(props);
    this.state = { value: '' };
  }

  public componentDidMount() {
    const val = localStorage.getItem(this.localKey);

    if (val !== null) {
      this.setState({ value: val });
    }
  }

  public componentWillUnmount() {
    localStorage.setItem(this.localKey, this.state.value);
  }

  public componentDidUpdate() {
    localStorage.setItem(this.localKey, this.state.value);
  }

  render(): React.ReactNode {
    return (
      <div className="search-bar">
        <SearchIcon className="search-bar__icon" />
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search"
          value={this.state.value}
          onChange={this.changeText}
        />
      </div>
    );
  }

  private changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.value;
    this.setState({ value: val });
  };
}

export default SearchBar;
