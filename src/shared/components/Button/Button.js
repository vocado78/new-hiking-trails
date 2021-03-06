import React from 'react';
import { Link } from 'react-router-dom';
import { buttonType } from '../../utils/types';

import styles from './styles.css';
// eslint-disable-next-line
export default function Button({ path, searchString, label, handleClick }) {
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

Button.propTypes = buttonType;
