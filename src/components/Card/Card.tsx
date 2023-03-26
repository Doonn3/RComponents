import React from 'react';
import CardType from './type/CardType';
import './style.css';
import { ReactComponent as IconLike } from '../../assets/like.svg';
import { ReactComponent as IconView } from '../../assets/view.svg';
import ImageBlank from '../../assets/blank-card.png';

type darkThemeType = {
  dark: string;
  whiteText: string;
};

interface IState {
  isDarkMode: boolean;
  darkTheme: darkThemeType;
}

class Card extends React.Component<CardType, IState> {
  private readonly theme = { dark: 'dark', whiteText: 'white' };

  constructor(props: CardType) {
    super(props);
    this.state = { isDarkMode: false, darkTheme: { dark: '', whiteText: '' } };
  }

  public componentDidMount(): void {
    const { darkMode } = this.props;
    if (darkMode) {
      this.setState({ isDarkMode: true });
      // if (this.state.isDarkMode) {
      this.setState({ darkTheme: this.theme });
      // }
    }
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
      <div className={`card ${this.state.darkTheme.dark}`}>
        <img className="card__img" src={img || ImageBlank} alt="" />
        <div className="card__content">
          <p className={`card__title`}>{title}</p>
          <p className={`card__author ${this.state.darkTheme.whiteText}`}>by {author}</p>
          <p className={`card__tags ${this.state.darkTheme.whiteText}`}>{tags}</p>
          <div className="card__social">
            <div className="card__likes">
              <IconLike className={`icon icon-like ${this.state.darkTheme.whiteText}`}></IconLike>
              <span className={`likes ${this.state.darkTheme.whiteText}`}>
                {liksCount !== undefined && liksCount <= -1 ? 0 : liksCount || 0}
              </span>
            </div>
            <div className="card__views">
              <IconView className={`icon icon-view ${this.state.darkTheme.whiteText}`}></IconView>
              <span className={`views ${this.state.darkTheme.whiteText}`}>
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
