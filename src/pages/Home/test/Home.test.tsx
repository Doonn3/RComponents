import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Provider } from 'react-redux';
import { createConfiguredStore } from '../../../store/Store';
import Home from '../Home';

describe('Home', () => {
  test('Проверка на search bar', () => {
    const { container } = render(
      <Provider store={createConfiguredStore()}>
        <Home />
      </Provider>
    );
    const searchBar = container.querySelector('.search-bar');
    expect(searchBar?.className).toEqual('search-bar');
  });
});
