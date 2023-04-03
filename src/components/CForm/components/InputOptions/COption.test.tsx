import { render } from '@testing-library/react';
import IRef from 'components/CForm/interface/IRef';
import IResetText from 'components/CForm/interface/IResetText';
import React from 'react';
import COption from './COption';

describe('COption test', () => {
  test('render component', () => {
    const { container } = render(<COption />);
    const selectElement = container.querySelector('select');
    expect(selectElement).toBeInTheDocument();
  });

  test('test func', () => {
    type RT = IRef<HTMLSelectElement> & IResetText;

    const ref = React.createRef<RT>();
    render(<COption ref={ref} />);

    expect(ref.current?.resetAccessText());
  });
});
