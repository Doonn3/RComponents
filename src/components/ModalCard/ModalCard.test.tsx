import { render } from '@testing-library/react';
import { expect } from 'vitest';
import ModalCard from './ModalCard';
import PlanetType from '../../api/types/PlanetType';

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
    const click = () => {};
    const { container } = render(<ModalCard {...type} onClick={click} />);
    expect(container).toBeInTheDocument();
  });
});
