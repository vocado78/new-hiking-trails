import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import ListItem from './ListItem/ListItem';

export default function List(props) {
  const {
    region,
    // eslint-disable-next-line
    results,
    selections: {
      selectedProvince,
      selectedService,
      selectedDay,
      selectedLevel,
      selectedComfort
    }
  } = props;

  const data = results;
  let listing = data;

  if (selectedProvince.length >= 1) {
    listing = listing.filter(trail => trail.province === selectedProvince);
  }

  if (selectedDay.length >= 1) {
    listing = listing.filter(trail => trail.duration.includes(selectedDay));
  }

  if (selectedLevel.length >= 1) {
    listing = listing.filter(trail => selectedLevel.includes(trail.level));
  }

  if (selectedComfort.length >= 1) {
    listing = listing.filter(trail => trail.comfort.includes(selectedComfort));
  }

  if (selectedService.length >= 1) {
    listing = listing.filter(trail => trail.services === selectedService);
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
  region: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
    province: PropTypes.string,
    start: PropTypes.string,
    finish: PropTypes.string,
    startLat: PropTypes.number,
    startLon: PropTypes.number,
    middleLat: PropTypes.number,
    middleLon: PropTypes.number,
    finLat: PropTypes.number,
    finLon: PropTypes.number,
    distance: PropTypes.string,
    duration: PropTypes.arrayOf(PropTypes.string),
    complete: PropTypes.string,
    level: PropTypes.string,
    comfort: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string,
    landscape: PropTypes.string,
    connect: PropTypes.string,
    stageDistances: PropTypes.string,
    services: PropTypes.string,
    stages: PropTypes.number,
    access: PropTypes.string,
    moreInfo: PropTypes.string
  })).isRequired,
  selections: PropTypes.shape({
    selectedProvince: PropTypes.string,
    selectedComfort: PropTypes.string,
    selectedDay: PropTypes.string,
    selectedLevel: PropTypes.arrayOf(PropTypes.string),
    selectedService: PropTypes.string
  }).isRequired
};
