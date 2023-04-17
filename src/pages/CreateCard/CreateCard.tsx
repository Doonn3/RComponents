import CardForm from '../../components/CardForm/CardForm';
import { useState } from 'react';
import CForm, { SuccessValidateProps } from '../../components/CForm/CForm';
import './style.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../store/Store';
import { addCard } from '../../store/slices/createCardForm.slice';

function CreateCard() {
  const dispatch = useDispatch();
  const storeCards = useSelector((state: StoreStateType) => state.formCards);
  const [cards, setCard] = useState<JSX.Element[]>(storeCards.cards || []);

  const create = (args: SuccessValidateProps) => {
    const { title, author, file, descriptions } = args;

    const key = `${title}.${Date.now()}`;

    const item: JSX.Element = (
      <CardForm
        key={key}
        authorFullName={author}
        title={title}
        descriptions={descriptions}
        img={file}
      />
    );

    setCard([...cards, item]);
    dispatch(addCard(item));
  };

  return (
    <section className="card-create">
      <CForm successValidate={create} />
      <div className="card-create__container">{cards}</div>
    </section>
  );
}

export default CreateCard;
