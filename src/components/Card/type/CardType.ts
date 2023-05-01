interface CardType {
  urlImg: string;
  name: string;
  descriptions: string;
  callback?: (id: string) => void;
}

export default CardType;
