import express from 'express';

import { renderToPipeableStream } from 'react-dom/server';
import { createServer as createViteServer } from 'vite';

import preFetchPlanets from './preFetchPlanets';

declare global {
  interface Window {
    __PRELOADED_STATE__?: unknown;
  }
}

async function main() {
  const app = express();
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
      },
    },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.get('*', async (req, res) => {
    const url = req.originalUrl;
    const { renderSSR } = await vite.ssrLoadModule('./src/entry-server.tsx');

    const preFetch = await preFetchPlanets();

    const appHtml = await renderSSR(url, preFetch);

    const { pipe } = renderToPipeableStream(appHtml, {
      bootstrapModules: ['./src/entry-client.tsx'],
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      onAllReady() {
        res.write(`
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preFetch).replace(/</g, '\\u003c')}
        </script>
        `);
        res.end();
      },
      onShellError(error) {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send(`<h1>Something went wrong ${error}</h1>`);
      },
      onError(error) {
        console.error(error);
      },
    });
  });

  app.listen(5173, () => {
    console.log('http://localhost:5173');
  });
}

main();
