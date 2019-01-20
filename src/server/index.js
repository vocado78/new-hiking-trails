const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/api/welcome', (req, res) => {
  res.send({ message: 'Welcome to my home!' })
});
app.listen(8080, () => {
  console.log("Server listening on port 8080")
});