interface CardType {
  id: string;
  darkMode: boolean;
  img?: string;
  title: string;
  author: string;
  tags: string[];
  liksCount?: number;
  viewCount?: number;
}

export default CardType;
