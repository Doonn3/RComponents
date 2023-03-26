import { render, screen, waitFor } from '@testing-library/react';
import CInput from './Cinput';

describe('CInput text test', () => {
  test('render component', () => {
    const { container } = render(<CInput inputType="text" />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });
});
