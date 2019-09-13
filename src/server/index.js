/* eslint-disable */
const express = require('express');
const firebase = require('firebase-admin');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router-dom').StaticRouter;
const App = require('../../src/client/components/App/App').default;

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

app.use(express.static('dist'));

app.get('/', (req, res) => {
  const context = {};

  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `
  <!DOCTYLE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Hiking Sweden</title>
      <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
      <div id="app">${component}</div>
    </body>
    <script src="bundle.js"></script>
  </html>
  `;

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.send(html);
  }

});

app.get('/api/trails', (req, res) => {
  const ref = db.ref('trails');
  ref.on('value', (snapshot) => {
    res.send(snapshot.val());
  }, (error) => {
    console.error(`An error occurred reading from db: ${error.code}, ${error.message}`);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
