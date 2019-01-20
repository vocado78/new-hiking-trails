import React from 'react';

import content from '../../../utils/content';
import styles from './styles.css';

export default function BannerText() {
  const { title, intro } = content.home.banner;
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.intro}>{intro}</p>
    </div>
  );
}
