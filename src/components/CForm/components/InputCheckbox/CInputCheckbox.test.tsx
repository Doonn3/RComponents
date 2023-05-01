import { render } from '@testing-library/react';
import CInputCheckbox from './CInputCheckbox';
import { expect } from 'vitest';

describe('CInputCheckbox test', () => {
  test('render component', () => {
    const { container } = render(<CInputCheckbox />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });
});
