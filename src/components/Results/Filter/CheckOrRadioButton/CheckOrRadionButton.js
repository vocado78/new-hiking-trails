import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function CheckOrRadioButton(props) {
  const {
    handleFunc,
    options,
    selectedOption,
    setName,
    title,
    type
  } = props;

  return (
    <div className={styles.formRow}>
      {options.map(option => (
        <label htmlFor={setName} key={option} className={styles.labelTitle}>
          {title}
          <input
            name={setName}
            onChange={handleFunc}
            value={option}
            checked={selectedOption.indexOf(option) > -1}
            type={type}
          />
          {' '}
          {option}
        </label>
      ))}
    </div>
  );
}

CheckOrRadioButton.propTypes = {
  handleFunc: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  setName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
