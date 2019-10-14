import fetch from 'isomorphic-fetch';
import config from '../../../config';

const env = process.env.NODE_ENV || 'development';
const { baseUrl, homePath } = config[env];

export default function fetchTrails() {
  const url = `${baseUrl}${homePath}/api/trails`;

  return fetch(`${url}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('There was a network failure reading from the db.');
    })
    .then(trailData => trailData)
    .catch((error) => {
      console.warn(`An error occurred fetching trail data: ${error.message}`);
      return null;
    });
}
