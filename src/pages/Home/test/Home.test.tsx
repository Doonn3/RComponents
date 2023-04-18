import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/Store';
import Home from '../Home';

describe('Home', () => {
  test('Проверка на search bar', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchBar = container.querySelector('.search-bar');
    expect(searchBar?.className).toEqual('search-bar');
  });
});
