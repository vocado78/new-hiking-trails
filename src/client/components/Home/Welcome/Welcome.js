import React from 'react';

import styles from './styles.css';
import content from '../../../../shared/utils/content';
import Button from '../../Button/Button';
import PageTitle from '../../PageTitle/PageTitle';

export default function Welcome() {
  const { title, first, second } = content.home.welcome;
  return (
    <div className={styles.welcome}>
      <PageTitle title={title} page="Home" />
      <div className={styles.welcomeText}>
        <p>{first}</p>
        <p>{second}</p>
        <Button
          path="/about"
          label="Read More"
        />
      </div>
      <div className={styles.welcomeImage}>
        {/* TODO: add <img /> */}
      </div>
    </div>
  );
}
