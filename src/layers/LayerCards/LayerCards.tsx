import PlanetType from 'api/types/PlanetType';
import Card from '../../components/Card/Card';
import React, { useCallback, useEffect, useState } from 'react';
import './style.scss';
import ModalCard from '../../components/ModalCard/ModalCard';

type PropsType = {
  items: PlanetType[] | undefined;
  pageCount: string;
  callback?: (val: number) => void;
};

function LayerCards(props: PropsType): JSX.Element {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const [value, setValue] = useState<number>(1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<JSX.Element>();

  const handleClickForItem = useCallback(
    (id: string) => {
      setIsOpen(true);
      console.log(id);
      const find = props.items?.find((item) => item.name === id);
      if (find) {
        const modal = <ModalCard {...find} onClick={handleClose} />;
        setModal(modal);
      }
    },
    [props.items]
  );

  const getItems = useCallback(() => {
    const data = props.items;
    if (data === undefined) return null;

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
    return items;
  }, [props.items, handleClickForItem]);

  useEffect(() => {
    const items = getItems();
    if (items === null) return;
    setItems(items);
  }, [getItems]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let num = Number(event.target.value);
    if (num <= 0) return;
    if (isNaN(num)) return;

    if (num >= calcMaxPage()) num = calcMaxPage();

    setValue(num);

    if (props.callback === undefined) return;
    props.callback(num);
  };

  const handlePrev = () => {
    let result = value - 1;
    if (result <= 0) result = 1;
    setValue(result);

    if (props.callback === undefined) return;
    props.callback(result);
  };

  const handleNext = () => {
    let result = value + 1;
    console.log(props.pageCount);
    if (result >= calcMaxPage()) result = calcMaxPage();
    setValue(result);

    if (props.callback === undefined) return;
    props.callback(result);
  };

  function calcMaxPage() {
    return Math.floor(Number(props.pageCount) / 10);
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
        <input className="layer__input" type="text" value={value} onChange={handleInput} />
        <button className="layer__btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="layer__content">{...items}</div>
    </section>
  );
}

export default LayerCards;
