import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '../Home';

describe('Home', () => {
  test('Проверка на search bar', () => {
    const { container } = render(<Home />);
    const searchBar = container.querySelector('.search-bar');
    expect(searchBar?.className).toEqual('search-bar');
  });
});
