import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';

import App from '../src/shared/components/App/App';
import routes from './routes';
import { apiKey } from '../credentials';

export default function renderRoutes(req, res) {
  const url = req.url === '/' ? '/ssr' : `/ssr${req.url}`;
  const currentRoute = routes.find(route => matchPath(url, route)) || {};
  console.log('-----------currentRoute is--------------', currentRoute);
  const promise = currentRoute.getTrails ? currentRoute.getTrails(req) : Promise.resolve();

  promise.then((data) => {
    console.log('--------from renderroutes-------------', url, data);
    const context = { data };
    const component = renderToString(
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    );

    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Hiking Sweden</title>
        <link rel="stylesheet" type="text/css" href="/ssr/styles.css">
      </head>
      <body>
        <div id="app">${component}</div>
      </body>
      <script src="https://maps.googleapis.com/maps/api/js?key=${apiKey}"></script>
      <script>window.__INITIAL_DATA__=${serialize(data)}</script>
      <script src="/ssr/bundle.js"></script>
    </html>
    `;

    res.send(html);
  }).catch((error) => {
    console.warn(`An error occurred on the server: ${error.message}`);
    return null;
  });
}
