import { render } from '@testing-library/react';
import { expect } from 'vitest';
import NotFound from '../404';

describe('CreateCard page test', () => {
  test('render component', () => {
    const { container } = render(<NotFound />);
    const elem = container.querySelector<HTMLElement>('.page-not-found');
    expect(elem).toBeInTheDocument();
  });
});
