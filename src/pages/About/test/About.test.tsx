import { render } from '@testing-library/react';
import { expect } from 'vitest';
import About from '../About';

describe('CreateCard page test', () => {
  test('render component', () => {
    const { container } = render(<About />);
    const elem = container.querySelector<HTMLElement>('.about');
    expect(elem).toBeInTheDocument();
  });
});
