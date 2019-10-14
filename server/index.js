/* eslint-disable import/prefer-default-export */
import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

import getTrails from './getTrails';
import renderRoutes from './renderRoutes';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/api/trails', getTrails);

app.get('*', renderRoutes);

export const ssr = functions.https.onRequest(app);
