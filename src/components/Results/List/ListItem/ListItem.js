import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import content from '../../../../utils/content';

export default function ListItem(props) {
  // eslint-disable-next-line
  const { data: { name, distance, title } } = props;
  const { results: { listItem: { bullet1 } } } = content;
  return (
    <div className={styles.listItem}>
      <span>♣</span>
      <h3>{name}</h3>
      <p>
        {bullet1}
        {' '}
        {distance}
      </p>
      <p>{title}</p>
    </div>
  );
}

ListItem.propTypes = {
  data: PropTypes.shape({
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
  }).isRequired
};
