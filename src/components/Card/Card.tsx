import { useEffect, useMemo, useState } from 'react';
import CardType from './type/CardType';
import { ReactComponent as IconLike } from '../../assets/like.svg';
import { ReactComponent as IconView } from '../../assets/view.svg';
import ImageBlank from '../../assets/blank-card.png';
import './style.css';

type darkThemeType = {
  dark: string;
  whiteText: string;
};

interface IState {
  isDarkMode: boolean;
  darkTheme: darkThemeType;
}

function Card(props: CardType) {
  const [mode, setDarkMode] = useState<IState>({
    isDarkMode: false,
    darkTheme: { dark: '', whiteText: '' },
  });

  const theme = useMemo(() => {
    return { dark: 'dark', whiteText: 'white' };
  }, []);

  useEffect(() => {
    const { darkMode } = props;
    if (darkMode) {
      setDarkMode({ isDarkMode: true, darkTheme: theme });
    }
  }, [props, theme]);

  const { img, author, title, tags, liksCount, viewCount } = props;

  return (
    <div className={`card ${mode.darkTheme.dark}`}>
      <img className="card__img" src={img || ImageBlank} alt="" />
      <div className="card__content">
        <p className={`card__title`}>{title}</p>
        <p className={`card__author ${mode.darkTheme.whiteText}`}>by {author}</p>
        <p className={`card__tags ${mode.darkTheme.whiteText}`}>{tags}</p>
        <div className="card__social">
          <div className="card__likes">
            <IconLike className={`icon icon-like ${mode.darkTheme.whiteText}`}></IconLike>
            <span className={`likes ${mode.darkTheme.whiteText}`}>
              {liksCount !== undefined && liksCount <= -1 ? 0 : liksCount || 0}
            </span>
          </div>
          <div className="card__views">
            <IconView className={`icon icon-view ${mode.darkTheme.whiteText}`}></IconView>
            <span className={`views ${mode.darkTheme.whiteText}`}>
              {viewCount !== undefined && viewCount <= -1 ? 0 : viewCount || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
