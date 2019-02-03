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

const db = firebase.database();

app.use(express.static('dist'));

app.get('/api/test-db', (req, res) => {
  const ref = db.ref('trails/kungsleden');
  ref.on('value', (snapshot) => {
    console.log('getDB response:', snapshot.val());
    res.send({
      message: snapshot.val()
    });
  }, (error) => {
    console.log('The read failed:', error.code);
  });
});

app.get('/api/welcome', (req, res) => {
  res.send({
    message: 'Welcome to my home!'
  });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
