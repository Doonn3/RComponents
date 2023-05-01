import PlanetType from 'api/types/PlanetType';
import Card from '../../components/Card/Card';
import React, { useState } from 'react';
import './style.scss';
import ModalCard from '../../components/ModalCard/ModalCard';
import { useSelector } from 'react-redux';
import { StoreStateType } from 'store/Store';
import { useDispatch } from 'react-redux';
import { setNumber } from '../../store/slices/pageNumber.slice';

type PropsType = {
  items: PlanetType[] | undefined;
  maxPageCount: number;
};

function LayerCards(props: PropsType): JSX.Element {
  const dispatch = useDispatch();
  const statePageNumber = useSelector((state: StoreStateType) => state.pageNumber);
  const [value, setValue] = useState<number>(statePageNumber.saveNumber || 1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<JSX.Element>();

  const handleClickForItem = (id: string) => {
    setIsOpen(true);
    const find = props.items?.find((item) => item.name === id);
    if (find) {
      const modal = <ModalCard {...find} onClick={handleClose} />;
      setModal(modal);
    }
  };

  const data = props.items;

  const items = data?.map((elem) => {
    return (
      <Card
        key={elem.name}
        name={elem.name}
        urlImg={elem.imageUrl}
        descriptions={elem.descriptions}
        callback={handleClickForItem}
      />
    );
  });

  const handlePrev = () => {
    let result = value - 1;
    if (result <= 0) result = 1;

    setValue(result);
    dispatch(setNumber(result));
  };

  const handleNext = () => {
    let result = value + 1;
    if (result >= calcMaxPage()) result = calcMaxPage();
    setValue(result);
    dispatch(setNumber(result));
  };

  function calcMaxPage() {
    return Math.floor(props.maxPageCount / 10);
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="layer">
      {isOpen ? modal : ''}
      <div className="layer__controll">
        <button className="layer__btn" onClick={handlePrev}>
          &lt;
        </button>
        <input
          className="layer__input"
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button className="layer__btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="layer__content">{items}</div>
    </section>
  );
}

export default LayerCards;
