import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createConfiguredStore } from '../../store/Store';
import { expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

describe('App test', () => {
  test('render test', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={createConfiguredStore()}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(container).toBeTruthy();

    const div = container.querySelector('.App');
    expect(div).toBeInTheDocument();
  });
});
