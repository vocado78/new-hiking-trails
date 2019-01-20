import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function Description(props) {
  const {
    access,
    complete,
    description,
    landscape,
    moreInfo
  } = props;

  return (
    <div className={styles.description}>
      <h3>Description</h3>
      <p>{description}</p>
      <p>{`Landscape: ${landscape}`}</p>
      <p>{`Access the trail from: ${access}`}</p>
      <p>{complete}</p>
      <p>
        For more information, please visit the
        <a href={moreInfo}> trail website</a>
        .
      </p>
    </div>
  );
}

Description.propTypes = {
  access: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  landscape: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired
};
