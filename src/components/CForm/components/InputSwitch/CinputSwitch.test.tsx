import { render } from '@testing-library/react';
import IRef from 'components/CForm/interface/IRef';
import IResetText from 'components/CForm/interface/IResetText';
import { expect } from 'vitest';
import React from 'react';
import CInputSwitch from './CInputSwitch';

describe('CInputSwitch test', () => {
  test('render component', () => {
    const { container } = render(<CInputSwitch />);
    const inputElements = container.querySelectorAll('input');
    expect(inputElements.length === 2).toBeTruthy();
  });

  test('test func', () => {
    type RT = IRef<HTMLInputElement> & IResetText;
    const ref = React.createRef<RT>();
    render(<CInputSwitch ref={ref} />);
    expect(ref.current?.resetAccessText());
  });
});
