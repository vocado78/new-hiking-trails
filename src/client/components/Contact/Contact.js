import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import styles from './styles.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <PageTitle title="Get in Touch" page="Contact" />
      <p>Some text goes here.</p>
    </div>
  );
}
