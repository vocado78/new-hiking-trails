import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import styles from './styles.css';

export default function About() {
  return (
    <div className={styles.about}>
      <PageTitle title="About this Website" page="About" />
      <p>Some text goes here.</p>
    </div>
  );
}
