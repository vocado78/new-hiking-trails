import React from 'react';

import content from '../../../shared/utils/content';
import styles from './styles.css';

export default function Footer() {
  const { text } = content.footer;
  return (
    <footer className={styles.footer}>
      <div>{text}</div>
    </footer>
  );
}
