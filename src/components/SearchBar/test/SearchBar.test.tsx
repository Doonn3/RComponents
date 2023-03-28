import { render } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('search bar tests', () => {
  test('Затычка', () => {
    render(<SearchBar />);
    expect(true).toEqual(true);
  });
});
