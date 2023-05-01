import './style.scss';

export interface CardFormPropsType {
  img: string;
  authorFullName: string;
  title: string;
  descriptions: string;
}

function CardForm(props: CardFormPropsType) {
  const { authorFullName, descriptions, img, title } = props;

  return (
    <div className="card-form">
      <img className="card-form__img" src={img} alt={title} />
      <div className="card-form__content">
        <span className="card-form__author">{authorFullName}</span>
        <span className="card-form__title">{title}</span>
        <span className="card-form__descriptions">{descriptions}</span>
      </div>
    </div>
  );
}

export default CardForm;
