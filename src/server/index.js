/* eslint-disable */
const express = require('express');
const cors = require('cors');
const firebase = require('firebase-admin');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router-dom').StaticRouter;
const matchPath = require('react-router-dom').matchPath;
import serialize from 'serialize-javascript';
import {
  showTrails,
  showProvinces
} from '../shared/utils/helpers';

const App = require('../../src/client/components/App/App').default;
const regions = require('../client/components/Home/RegionSelect/helpers').regions;
const routes = require('../shared/routes').default;

const app = express();
const privateKey = `-----BEGIN PRIVATE KEY-----\n${process.env.FIREBASE_KEY}\n-----END PRIVATE KEY-----\n`;

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey.replace(/\\n/g, '\n')
  }),
  databaseURL: process.env.DATABASE_URL
});

const db = firebase.database();

app.use(cors());
app.use(express.static('dist'));

app.get('/api/trails', (req, res) => {
  const ref = db.ref('trails');
  ref.on('value', (snapshot) => {
    res.send(snapshot.val());
  }, (error) => {
    console.error(`An error occurred reading from db: ${error.code}, ${error.message}`);
  });
});

app.get('*', (req, res) => {
  const currentRoute = routes.find((route) => matchPath(req.url, route)) || {};;
  const promise = currentRoute.getTrails ? currentRoute.getTrails() : Promise.resolve();

  promise.then((data) => {
    let trailData = [];
    let region = {};
    let provinces = [];

    if (data) {
      const path = req.path.split('/').pop();
      region = regions.find(region => region.value === path).value;

      if (region) {
        trailData = showTrails(data, region);
        provinces = showProvinces(region);
      } else {
        trailData = data.path;
      }
    }

    const context = { trailData, region, provinces };
    
    const component = ReactDOMServer.renderToString(
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

    res.send(html)
  }).catch((error) => {
    console.warn(`An error occurred on the server: ${error.message}`);
    return null;
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
