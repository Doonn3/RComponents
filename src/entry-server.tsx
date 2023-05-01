import { createConfiguredStore } from './store/Store';

import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import { StaticRouter } from 'react-router-dom/server';

import PlanetType from './api/types/PlanetType';
import HtmlTemplate from './shared/template/HtmlTemplate';

type InitType = { planets: { data: PlanetType[] } };

export function renderSSR(url: string, preloadedState: PlanetType[]) {
  const initState: InitType = {
    planets: { data: preloadedState },
  };

  const store = createConfiguredStore(initState);

  const html = (
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const template = <HtmlTemplate node={html} />;

  return template;
}
