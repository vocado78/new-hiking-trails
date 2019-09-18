import fetch from 'isomorphic-fetch';

export default function fetchTrails(req = {}) {
  // eslint-disable-next-line no-undef
  const root = __isBrowser__ ? `${window.location.protocol}//${window.location.host}`
    : 'https://us-central1-hiking-sweden.cloudfunctions.net';
  console.log('----------------from fetch trails-------------', root, __isBrowser__);
  return fetch(`${root}/ssr/api/trails`)
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
