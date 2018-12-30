import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.css';
import content from '../../../utils/content';

export default function Welcome() {
  const { first, second } = content.home.welcome;
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeText}>
        <h2>
          <span>Home</span>
          <br />
          Welcome to Hiking Trails in Sweden
        </h2>
        <p>{first}</p>
        <p>{second}</p>
      </div>
      <div className={styles.welcomeImage}>
        {/* TODO: add <img /> */}
      </div>
    </div>
  );
}
