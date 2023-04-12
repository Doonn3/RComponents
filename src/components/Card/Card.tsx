import CardType from './type/CardType';
import UnknownPlanet from '@sw/UnknownPlanet.webp';
import './style.scss';

function Card(props: CardType) {
  const { urlImg, descriptions, name } = props;

  const handleClick = () => {
    if (props.callback) {
      props.callback(name);
    }
  };

  const getDescriptions = () => {
    if (descriptions === undefined || descriptions === '') {
      return `Someone was too lazy to describe the description of the planet, it's not my fault, well, it's not accurate`;
    }

    if (descriptions.length > 300) {
      return descriptions.slice(0, (descriptions.length / 100) * 30) + '.....';
    }

    return descriptions;
  };

  return (
    <div className={`card`} onClick={handleClick}>
      <img className="card__img" src={urlImg || UnknownPlanet} alt={name} />
      <div className="card__content">
        <h1 className={`card__name`}>{name}</h1>
        <p className={`card__descriptions`}>{getDescriptions()}</p>
      </div>
    </div>
  );
}

export default Card;
