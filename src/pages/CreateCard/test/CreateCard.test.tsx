import { render } from '@testing-library/react';
import CreateCard from '../CreateCard';

describe('CreateCard page test', () => {
  test('render component', () => {
    const { container } = render(<CreateCard />);
    const elem = container.querySelector<HTMLElement>('.card-create');
    expect(elem).toBeInTheDocument();
  });
});
