import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/Store';

import App from '../App';

describe('App test', () => {
  test('render test', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toBeTruthy();

    const div = container.querySelector('.App');
    expect(div).toBeInTheDocument();
  });
});
