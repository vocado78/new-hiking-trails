import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';

import App from '../src/shared/components/App/App';
import routes from './routes';
import { apiKey } from '../credentials';

export default function renderRoutes(req, res) {
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = currentRoute.getTrails ? currentRoute.getTrails(req) : Promise.resolve();

  promise.then((data) => {
    const context = { data };
    const component = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Hiking Sweden</title>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <div id="app">${component}</div>
      </body>
      <script src="https://maps.googleapis.com/maps/api/js?key=${apiKey}"></script>
      <script>window.__INITIAL_DATA__=${serialize(data)}</script>
      <script src="/bundle.js"></script>
    </html>
    `;

    res.send(html);
  }).catch((error) => {
    console.warn(`An error occurred on the server: ${error.message}`);
    return null;
  });
}
