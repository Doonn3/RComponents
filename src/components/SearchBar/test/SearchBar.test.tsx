import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Provider } from 'react-redux';
import { createConfiguredStore } from '../../../store/Store';
import SearchBar from '../SearchBar';

describe('search bar tests', () => {
  test('Затычка', () => {
    render(
      <Provider store={createConfiguredStore()}>
        <SearchBar />
      </Provider>
    );
    expect(true).toEqual(true);
  });
});
