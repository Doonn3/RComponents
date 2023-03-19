import React from 'react';
import CardType from './type/CardType';
import './style.css';
import { ReactComponent as IconLike } from '../../assets/like.svg';
import { ReactComponent as IconView } from '../../assets/view.svg';
import ImageBlank from '../../assets/blank-card.png';

class Card extends React.Component<CardType> {
  constructor(props: CardType) {
    super(props);
  }

  public componentDidMount(): void {
    //
  }

  public componentWillUnmount(): void {
    //
  }

  public componentDidUpdate(): void {
    //
  }

  public render(): React.ReactNode {
    const { img, author, title, tags, liksCount, viewCount } = this.props;
    return (
      <div className="card">
        <img className="card__img" src={img || ImageBlank} alt="" />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__author">by {author}</p>
          <p className="card__tags">{tags}</p>
          <div className="card__social">
            <div className="card__likes">
              <IconLike className="icon icon-like"></IconLike>
              <span className="likes">
                {liksCount !== undefined && liksCount <= -1 ? 0 : liksCount || 0}
              </span>
            </div>
            <div className="card__views">
              <IconView className="icon icon-view"></IconView>
              <span className="views">
                {viewCount !== undefined && viewCount <= -1 ? 0 : viewCount || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
