import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import CForm, { SuccessValidateProps } from '../../components/CForm/CForm';
import './style.css';

function CreateCard() {
  const [cards, setCard] = useState<JSX.Element[]>([]);

  const create = (args: SuccessValidateProps) => {
    const { title, author, tags, file, themeDarkMode } = args;

    const key = `${title}.${Date.now()}`;

    const item: JSX.Element = (
      <Card
        id={key}
        key={key}
        img={file}
        title={title}
        author={author}
        tags={tags}
        darkMode={themeDarkMode}
      />
    );

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
