import React from 'react';

import styles from './styles.css';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';
import config from '../../../../config';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];


export default function Home() {
  return (
    <div className={styles.notFound}>
      <PageTitle title="Sorry, the page you're looking for doesn't exist" page="Not Found" />
      <Button path={homePath} label="Go to Home" />
    </div>
  );
}
