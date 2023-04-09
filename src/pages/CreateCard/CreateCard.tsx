import { useState } from 'react';
import Card from '../../components/Card/Card';
import CForm, { SuccessValidateProps } from '../../components/CForm/CForm';
import './style.css';

function CreateCard() {
  const [cards, setCard] = useState<JSX.Element[]>([]);

  const create = (args: SuccessValidateProps) => {
    const { title, author, file } = args;

    const key = `${title}.${Date.now()}`;

    const item: JSX.Element = <Card key={key} urlImg={file} descriptions={title} name={author} />;

    // setCard((prevState) => ({ ...prevState, item }));
    setCard([...cards, item]);
  };

  return (
    <section className="card-create">
      <CForm successValidate={create} />
      <div className="card-create__container">{cards}</div>
    </section>
  );
}

export default CreateCard;
