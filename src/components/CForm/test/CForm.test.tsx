/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
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
    // expect(ref.current?.accessTextError());
    // expect(ref.current?.accessTextSuccess());
    // expect(ref.current?.resetAccessText());
  });
});
