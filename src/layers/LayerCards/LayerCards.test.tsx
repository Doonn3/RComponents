import { render } from '@testing-library/react';
import LayerCards from './LayerCards';

interface PlanetType {
  imageUrl: string;
  name: string;
  descriptions: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url?: string;
}

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
