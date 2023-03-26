import { render, screen, waitFor } from '@testing-library/react';
import CForm from '../CForm';

describe('CForm test', () => {
  test('render component', () => {
    const { container } = render(<CForm />);
    const formElement = container.querySelector('form');
    expect(formElement).toBeInTheDocument();
  });
});
