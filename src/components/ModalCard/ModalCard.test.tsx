import { render } from '@testing-library/react';
import ModalCard from './ModalCard';

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

describe('ModalCard test', () => {
  test('ModalCard render', () => {
    const click = () => {
      //
    };
    const { container } = render(<ModalCard {...type} onClick={click} />);
    expect(container).toBeInTheDocument();
  });
});
