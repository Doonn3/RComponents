import { ReactElement, useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import CardType from 'components/Card/type/CardType';
import SearchBar from '../../components/SearchBar/SearchBar';
import FakeCards from '../../FakeApi/cards.json';
import './style.css';

function Home() {
  const [cards, setCards] = useState<ReactElement[]>();

  useEffect(() => {
    const cards = getCards();
    setCards(cards);
  }, []);

  return (
    <main className="main">
      <SearchBar />
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
        key={card.id}
        id={card.id}
        darkMode={card.darkMode}
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
