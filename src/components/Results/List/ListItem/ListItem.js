import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.css';

export default function ListItem(props) {
  // eslint-disable-next-line
  const { data: { name, distance, title } } = props;

  return (
    <div className={styles.listItem}>
      <span>♣</span>
      <h3>{name}</h3>
      <p>
        Total Distance:
        {' '}
        {distance}
      </p>
      <p>{title}</p>
    </div>
  );
}

// ListItem.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.string,
//     PropTypes.arrayOf(PropTypes.string),
//     PropTypes.number
//   ).isRequired
// };
