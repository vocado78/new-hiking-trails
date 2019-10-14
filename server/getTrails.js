import firebase from 'firebase-admin';
// import {
//   projectId,
//   clientEmail,
//   projectKey,
//   databaseURL
// } from '../credentials';
import config from '../config';

const env = process.env.NODE_ENV || 'development';
const { database: { projectId, clientEmail, projectKey, url } } = config[env];
const privateKey = `-----BEGIN PRIVATE KEY-----\n${projectKey}\n-----END PRIVATE KEY-----\n`;

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n')
  }),
  databaseURL: url
});

const db = firebase.database();

export default function getTrails(req, res) {
  const ref = db.ref('trails');
  ref.on('value', (snapshot) => {
    res.send(snapshot.val());
  }, (error) => {
    console.error(`An error occurred reading from db: ${error.code}, ${error.message}`);
  });
}
