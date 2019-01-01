import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import ListItem from './ListItem/ListItem';

export default function List(props) {
  const {
    comfort,
    day,
    level,
    list,
    prov,
    region,
    services
  } = props;

  const data = list;
  let listing = data;

  if (prov.length >= 1) {
    listing = listing.filter(trail => trail.province === prov);
  }

  if (day.length >= 1) {
    listing = listing.filter(trail => trail.duration.includes(day));
  }

  if (level.length >= 1) {
    listing = listing.filter(trail => level.includes(trail.level));
  }

  if (comfort.length >= 1) {
    listing = listing.filter(trail => trail.comfort.includes(comfort));
  }

  if (services.length >= 1) {
    listing = listing.filter(trail => trail.services === services);
  }

  return (
    <div className={styles.list}>
      <h2>
        Hiking Trails in
        {region}
      </h2>
      <ul>
        {listing
          .filter((item, i, ar) => ar.indexOf(item) === i)
          .map(trail => (
            <Link
              to={{
                pathname: './results/trail-detail',
                search: `'?name='${trail.name}`,
                state: trail
              }}
              key={trail.name}
            >
              <li>
                <ListItem data={trail} />
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  comfort: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  level: PropTypes.arrayOf(PropTypes.string).isRequired,
  list: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number
  )).isRequired,
  prov: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired
};
