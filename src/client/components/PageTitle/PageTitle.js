import React from 'react';
import { pageTitleType } from '../../../shared/utils/types';

import styles from './styles.css';

export default function PageTitle({ title, page }) {
  return (
    <h2 className={styles.pageTitle}>
      <span>{page}</span>
      <br />
      {title}
    </h2>
  );
}

PageTitle.propTypes = pageTitleType;
