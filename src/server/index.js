const express = require('express');
const firebase = require('firebase-admin');

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

app.use(express.static('dist'));

// app.get('/api/test-db', (req, res) => {
//   nano.db.get('trails').then((data) => {
//     console.log('getDB response:', data);
//     res.send({
//       message: data
//     });
//   }).catch((err) => {
//     console.log(err);
//   });
// });

app.get('/api/welcome', (req, res) => {
  res.send({
    message: 'Welcome to my home!'
  });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
