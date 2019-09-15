/* eslint-disable */
import express from 'express';
import cors from 'cors';

import getTrails from './getTrails';
import renderRoutes from './renderRoutes';

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('/api/trails', getTrails);

app.get('*', renderRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
