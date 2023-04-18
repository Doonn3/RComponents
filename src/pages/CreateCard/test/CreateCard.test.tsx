import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/Store';
import CreateCard from '../CreateCard';

describe('CreateCard page test', () => {
  test('render component', () => {
    const { container } = render(
      <Provider store={store}>
        <CreateCard />
      </Provider>
    );

    const elem = container.querySelector<HTMLElement>('.card-create');
    expect(elem).toBeInTheDocument();

    const div = container.querySelector<HTMLElement>('.card-create__container');
    expect(div).toBeInTheDocument();
  });
});
