import React from 'react';
import Card from '../../components/Card/Card';
import CForm, { SuccessValidateProps } from '../../components/CForm/CForm';
import './style.css';

class CreateCard extends React.Component<object, { cards: JSX.Element[] }> {
  constructor(prop = {}) {
    super(prop);

    this.state = { cards: [] };
  }

  public render(): React.ReactNode {
    return (
      <section className="card-create">
        <CForm successValidate={this.create} />
        <div className="card-create__container">{this.state.cards}</div>
      </section>
    );
  }

  private create = (args: SuccessValidateProps) => {
    console.log('CREATE!!!!');
    const { title, author, tags, file, themeDarkMode } = args;

    const item: JSX.Element = (
      <Card
        key={title}
        img={file}
        title={title}
        author={author}
        tags={tags}
        darkMode={themeDarkMode}
      />
    );

    this.setState((prevState) => ({ cards: [...prevState.cards, item] }));
  };
}

export default CreateCard;
