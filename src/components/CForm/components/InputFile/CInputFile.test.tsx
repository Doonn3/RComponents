import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { act } from 'react-dom/test-utils';
import IAccessCInputHandles from 'components/CForm/interface/IAccessCInputHandles';
import React from 'react';
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

  test('test func', () => {
    const ref = React.createRef<IAccessCInputHandles<HTMLInputElement>>();
    render(<CInputFile ref={ref} />);

    act(() => {
      expect(ref.current?.accessTextError());
      expect(ref.current?.accessTextSuccess());
      expect(ref.current?.resetAccessText());
    });
  });
});
