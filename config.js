import {
  projectId,
  clientEmail,
  projectKey,
  databaseURL,
  apiKey
} from './credentials';

const config = {
  development: {
    baseUrl: 'http://localhost:5000',
    homePath: '/hiking-sweden/us-central1/ssr',
    database: {
      url: databaseURL,
      projectId,
      clientEmail,
      projectKey
    },
    mapsApiKey: apiKey
  },
  production: {
    baseUrl: 'https://us-central1-hiking-sweden.cloudfunctions.net',
    homePath: '/ssr',
    database: {
      url: databaseURL,
      projectId,
      clientEmail,
      projectKey
    },
    mapsApiKey: apiKey
  }
};

export default config;
