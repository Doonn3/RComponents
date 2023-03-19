import { render } from '@testing-library/react';
import FakeCards from '../../../FakeApi/cards.json';
import Home from '../Home';

describe('Home', () => {
  test('Проверка на search bar', () => {
    const { container } = render(<Home />);
    const searchBar = container.querySelector('.search-bar');
    expect(searchBar?.className).toEqual('search-bar');
  });

  test('Проверка на количество, Карточек', () => {
    const keys = Object.keys(FakeCards);
    const { container } = render(<Home />);
    const cards = container.querySelectorAll('.card');
    expect(cards.length).toEqual(keys.length);
  });
});
