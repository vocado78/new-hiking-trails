import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';

import {
  showTrails,
  showProvinces,
  regions
} from '../shared/utils/helpers';
import App from '../shared/components/App/App';
import routes from './routes';

export default function renderRoutes(req, res) {
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = currentRoute.getTrails ? currentRoute.getTrails() : Promise.resolve();

  promise.then((data) => {
    let trailData = [];
    let region = {};
    let provinces = [];

    if (data) {
      const path = req.path.split('/').pop();
      region = regions.find(item => item.value === path) || {};

      if (region && region.value) {
        region = region.value;
        trailData = showTrails(data, region);
        provinces = showProvinces(region);
      } else {
        trailData = data[path];
      }
    }

    const context = { trailData, region, provinces };

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
