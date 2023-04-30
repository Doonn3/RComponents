import { render } from '@testing-library/react';
import { expect } from 'vitest';
import LayerCards from './LayerCards';
import PlanetType from '../../api/types/PlanetType';
import { Provider } from 'react-redux';
import { createConfiguredStore } from '../../store/Store';

describe('LayerCards test', () => {
  test('LayerCards render', () => {
    const type: PlanetType = {
      imageUrl: '',
      name: '',
      descriptions: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      residents: [],
      films: [],
      created: new Date(),
      edited: new Date(),
      url: '',
    };
    const arr = [type];
    const { container } = render(
      <Provider store={createConfiguredStore()}>
        <LayerCards items={arr} maxPageCount={1} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
