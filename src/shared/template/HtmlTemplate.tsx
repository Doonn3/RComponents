interface ChildNode {
  node: JSX.Element;
}
const script = `
    import RefreshRuntime from 'http://localhost:5173/@react-refresh'
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  `;

function HtmlTemplate({ node }: ChildNode) {
  return (
    <html lang="en">
      <head>
        <script type="module" dangerouslySetInnerHTML={{ __html: script }} />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>
      <body>
        <div id="root">{node}</div>
      </body>
    </html>
  );
}

export default HtmlTemplate;
