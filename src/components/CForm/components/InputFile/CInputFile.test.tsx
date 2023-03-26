import { render } from '@testing-library/react';
import CInputFile from './CInputFile';

describe('CInputFile test', () => {
  test('render component', () => {
    const { container } = render(<CInputFile />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });

  test('test tipe images format .jpeg, .png', () => {
    const { container } = render(<CInputFile />);
    const inputElement = container.querySelector('input');
    const acceptAttrib = inputElement?.getAttribute('accept');
    expect(acceptAttrib === 'image/png, image/jpeg').toBeTruthy();
  });
});
