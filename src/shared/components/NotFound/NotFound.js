import React from 'react';

import styles from './styles.css';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';


export default function Home() {
  return (
    <div className={styles.notFound}>
      <PageTitle title="Sorry, the page you're looking for doesn't exist" page="Not Found" />
      <Button path="/" label="Go to Home" />
    </div>
  );
}
