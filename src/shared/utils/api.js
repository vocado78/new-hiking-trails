import fetch from 'isomorphic-fetch';

export default function fetchTrails(req = {}) {
  // eslint-disable-next-line no-undef
  const root = __isBrowser__ ? `${window.location.protocol}//${window.location.host}`
    : `${req.protocol}://${req.hostname}:3000`; // TODO: remove port for prod;

  return fetch(`${root}/api/trails`)
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
