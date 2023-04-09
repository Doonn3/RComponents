import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  test('Проверка на search bar', () => {
    const { container } = render(<Home />);
    const searchBar = container.querySelector('.search-bar');
    expect(searchBar?.className).toEqual('search-bar');
  });
});
