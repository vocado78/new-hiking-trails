import express from 'express';
import cors from 'cors';

import getTrails from './getTrails';
import renderRoutes from './renderRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('dist'));

app.get('/api/trails', getTrails);

app.get('*', renderRoutes);

app.listen(port, () => {
  console.log(`Server listening on port${port}`);
});
