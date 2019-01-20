import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export default function Button(props) {
  const {
    path,
    searchString,
    label,
    handleClick
  } = props;
  const hasPath = path;

  if (hasPath) {
    return (
      <Link
        className={styles.btnLink}
        to={{
          pathname: path,
          search: searchString
        }}
      >
        {label}
      </Link>
    );
  }
  return (
    <button type="button" className={styles.btn} onClick={handleClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  searchString: '',
  path: '',
  handleClick: () => {}
};

Button.propTypes = {
  path: PropTypes.string,
  searchString: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};
