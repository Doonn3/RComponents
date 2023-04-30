import { render } from '@testing-library/react';
import { expect } from 'vitest';
import Card from '../Card';

describe('card test', () => {
  test('card render', () => {
    const { container } = render(<Card name="ta" descriptions="sd" urlImg="asd" />);
    expect(container).toBeInTheDocument();
  });
});
