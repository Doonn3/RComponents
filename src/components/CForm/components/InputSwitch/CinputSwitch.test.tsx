import { render } from '@testing-library/react';
import CInputSwitch from './CInputSwitch';

describe('CInputSwitch test', () => {
  test('render component', () => {
    const { container } = render(<CInputSwitch />);
    const inputElements = container.querySelectorAll('input');
    expect(inputElements.length === 2).toBeTruthy();
  });
});
