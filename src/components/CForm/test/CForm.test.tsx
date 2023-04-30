import { render, fireEvent } from '@testing-library/react';
import { expect } from 'vitest';
import CForm from '../CForm';

describe('CForm test', () => {
  test('render component', () => {
    const { container } = render(<CForm />);
    const formElement = container.querySelector('form');
    expect(formElement).toBeInTheDocument();
  });

  test('test func', () => {
    const { container } = render(<CForm />);

    const submit = container.querySelector('form') as HTMLFormElement;

    const flag = fireEvent.click(submit);
    container.click();
    expect(flag).toBeTruthy();
  });
});
