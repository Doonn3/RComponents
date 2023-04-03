import { render } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
  test('render test', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();

    const div = container.querySelector('.App');
    expect(div).toBeInTheDocument();
  });
});
