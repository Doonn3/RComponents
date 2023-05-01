import { render } from '@testing-library/react';
import { expect } from 'vitest';
import IAccessCInputHandles from 'components/CForm/interface/IAccessCInputHandles';
import React from 'react';
import { act } from 'react-dom/test-utils';
import CInput from './Cinput';

describe('CInput text test', () => {
  test('render component', () => {
    const { container } = render(<CInput inputType="text" />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });

  test('test func', () => {
    const ref = React.createRef<IAccessCInputHandles<HTMLInputElement>>();

    render(<CInput ref={ref} />);

    act(() => {
      expect(ref.current?.accessTextError());
      expect(ref.current?.accessTextSuccess());
      expect(ref.current?.resetAccessText());
    });
  });
});
