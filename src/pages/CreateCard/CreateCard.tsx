import CardForm, { CardFormPropsType } from '../../components/CardForm/CardForm';
import { useState } from 'react';
import CForm, { SuccessValidateProps } from '../../components/CForm/CForm';
import './style.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../store/Store';
import { addCard } from '../../store/slices/createCardForm.slice';
import { v4 as uuidv4 } from 'uuid';

function CreateCard() {
  const dispatch = useDispatch();
  const storeCards = useSelector((state: StoreStateType) => state.formCards);
  const [cards, setCard] = useState<CardFormPropsType[]>(storeCards.cards || []);

  const create = (args: SuccessValidateProps) => {
    const { title, author, file, descriptions } = args;

    const itemData: CardFormPropsType = {
      authorFullName: author,
      title: title,
      descriptions: descriptions,
      img: file,
    };

    setCard([...cards, itemData]);
    dispatch(addCard(itemData));
  };

  return (
    <section className="card-create">
      <CForm successValidate={create} />
      <div className="card-create__container">
        {cards.map((item) => {
          return (
            <CardForm
              key={uuidv4()}
              authorFullName={item.authorFullName}
              title={item.title}
              descriptions={item.descriptions}
              img={item.img}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CreateCard;
