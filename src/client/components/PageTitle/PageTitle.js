import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function PageTitle(props) {
  const { title, page } = props;
  return (
    <h2 className={styles.pageTitle}>
      <span>{page}</span>
      <br />
      {title}
    </h2>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
};
