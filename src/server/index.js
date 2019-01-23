const express = require('express');
// const env = require('../../.env');
const nano = require('nano')(process.env.COUCHDB_URL);

const app = express();

app.use(express.static('dist'));

app.get('/api/test-db', (req, res) => {
  nano.db.get('trails').then((data) => {
    console.log('getDB response:', data);
    res.send({ 
      message: data
     });
  }).catch(err => {
    console.log(err);
  });
});

app.get('/api/welcome', (req, res) => {
  res.send({ 
    message: 'Welcome to my home!'
   });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080", process.env.COUCHDB_URL)
});