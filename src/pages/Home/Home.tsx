import React, { ReactElement } from 'react';
import Card from '../../components/Card/Card';
import CardType from 'components/Card/type/CardType';
import SearchBar from '../../components/SearchBar/SearchBar';
import FakeCards from '../../FakeApi/cards.json';
import './style.css';

function Home() {
  const cards = getCards();
  return (
    <main className="main">
      <SearchBar></SearchBar>
      <section className="main__content">{cards}</section>
    </main>
  );
}

function getCards(): ReactElement[] {
  const data = JSON.stringify(FakeCards);
  const jsonObj = JSON.parse(data);

  const cards: ReactElement[] = [];
  for (const key in jsonObj) {
    const card: CardType = jsonObj[key];
    cards.push(
      <Card
        key={key}
        img={card.img}
        title={card.title}
        author={card.author}
        tags={card.tags}
        liksCount={card.liksCount}
        viewCount={card.viewCount}
      />
    );
  }
  return cards;
}

export default Home;
