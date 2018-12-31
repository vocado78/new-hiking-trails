import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export default function Button(props) {
  const { path, searchString, label } = props;
  return (
    <Link
      className={styles.btnPrimary}
      to={{
        pathname: path,
        search: searchString
      }}
    >
      {label}
    </Link>
  );
}

Button.propTypes = {
  path: PropTypes.string.isRequired,
  searchString: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
