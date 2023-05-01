import { useState } from 'react';
import PlanetType from '../../api/types/PlanetType';
import UnknownPlanet from '@sw/UnknownPlanet.webp';
import './style.scss';

type OnClickType = {
  onClick: () => void;
};

function ModalCard(props: PlanetType & OnClickType): JSX.Element {
  const [isOpenInfo, setOpenInfo] = useState<boolean>(true);
  const [isOpenDescriptions, setOpenDescriptions] = useState<boolean>(true);

  const handleClickDescriptions = () => {
    setOpenDescriptions(!isOpenDescriptions);
  };

  const handleClickInfo = () => {
    setOpenInfo(!isOpenInfo);
  };

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      props.onClick();
    }
  };

  const getDescriptions = () => {
    const descriptions = props.descriptions;
    if (descriptions === undefined || descriptions === '') {
      return `Someone was too lazy to describe the description of the planet, it's not my fault, well, it's not accurate`;
    }

    if (descriptions.length > 300) {
      return descriptions.slice(0, (descriptions.length / 100) * 30) + '.....';
    }

    return descriptions;
  };

  return (
    <div className="modal-card" onClick={handleClose}>
      <div className="modal-card__content">
        <div className={'descriptions'} onClick={handleClickDescriptions}>
          <div className={`descriptions__content ${isOpenDescriptions ? 'open--content' : ''}`}>
            <h1 className="descriptions__name">{props.name}</h1>
            <p className="descriptions__text">{getDescriptions()}</p>
          </div>
        </div>
        <img className="modal-card__img" src={props.imageUrl || UnknownPlanet} alt={props.name} />
        <div className={`info`} onClick={handleClickInfo}>
          <div className={`info__content ${isOpenInfo ? 'open--content' : ''}`}>
            <span className={'info__params'}>Astrographical information</span>

            <div>
              <div>
                <span>Период вращения</span>
                <span>{props.rotation_period}</span>
              </div>
              <div>
                <span>Орбитальный период</span>
                <span>{props.orbital_period}</span>
              </div>
              <div>
                <span>Диаметр</span>
                <span>{props.diameter}</span>
              </div>
              <div>
                <span>Гравитация</span>
                <span>{props.gravity}</span>
              </div>
              <div>
                <span>Климат</span>
                <span>{props.climate}</span>
              </div>
              <div>
                <span>Поверхность воды</span>
                <span>{props.surface_water}</span>
              </div>
              <div>
                <span>Тип ландшафта</span>
                <span>{props.terrain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
