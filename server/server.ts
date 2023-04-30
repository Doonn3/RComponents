import express from 'express';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { renderToPipeableStream } from 'react-dom/server';
import { createServer as createViteServer } from 'vite';

import preFetchPlanets from './preFetchPlanets';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    let template = await fs.readFile(path.resolve(__dirname, '../index.html'), 'utf-8');
    const style = await fs.readFile(path.resolve(__dirname, 'styleSSR.css'), 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    const { renderSSR } = await vite.ssrLoadModule('./src/entry-server.tsx');

    const preFetch = await preFetchPlanets();

    const appHtml = await renderSSR(url, preFetch);
    // appHtml = ReactDOMServer.renderToString(appHtml);

    // const templateBuild = template
    //   .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
    //   .replace('<!-- style -->', `<style>${style}"</style>`)
    //   .replace(
    //     '<!--preload-->',
    //     `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preFetch).replace(
    //       /</g,
    //       '\\u003c'
    //     )}</script>`
    //   );
    // let templateBuild = template;
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
        res.send('<h1>Something went wrong</h1>');
      },
      onError(error) {
        console.error(error);
      },
    });

    // const { pipe } = renderToPipeableStream(appHtml, {
    //   onShellReady() {
    //     templateBuild = templateBuild
    //       .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
    //       .replace('<!-- style -->', `<style>${style}"</style>`)
    //       .replace(
    //         '<!--preload-->',
    //         `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preFetch).replace(
    //           /</g,
    //           '\\u003c'
    //         )}</script>`
    //       );

    //     res.status(200).set({ 'Content-Type': 'text/html' }).end(templateBuild);
    //     // pipe(res);
    //   },
    // });

    // res.status(200).set({ 'Content-Type': 'text/html' }).end(templateBuild);
  });

  app.listen(5173, () => {
    console.log('http://localhost:5173');
  });
}

main();
