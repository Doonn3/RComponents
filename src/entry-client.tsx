import { createConfiguredStore } from './store/Store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = document.getElementById('root') as HTMLElement;

if (window.__PRELOADED_STATE__ === undefined) {
  const store = createConfiguredStore();
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  const store = createConfiguredStore({ planets: { data: window.__PRELOADED_STATE__ } });

  delete window.__PRELOADED_STATE__;

  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
