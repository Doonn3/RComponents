import { render } from '@testing-library/react';
import COption from './COption';

describe('COption test', () => {
  test('render component', () => {
    const { container } = render(<COption />);
    const selectElement = container.querySelector('select');
    expect(selectElement).toBeInTheDocument();
  });
});
