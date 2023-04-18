import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/Store';
import SearchBar from '../SearchBar';

describe('search bar tests', () => {
  test('Затычка', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(true).toEqual(true);
  });
});
