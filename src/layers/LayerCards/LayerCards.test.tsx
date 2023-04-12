import { render } from '@testing-library/react';
import LayerCards from './LayerCards';
import PlanetType from '../../api/types/PlanetType';

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
    const { container } = render(<LayerCards items={arr} pageCount={'1'} />);
    expect(container).toBeInTheDocument();
  });
});
