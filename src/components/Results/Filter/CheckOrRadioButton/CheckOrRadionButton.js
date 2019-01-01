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
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={setName} className={styles.labelTitle}>{title}</label>
      {options.map(option => (
        <div key={option}>
          <input
            name={setName}
            onChange={handleFunc}
            value={option}
            checked={selectedOption.indexOf(option) > -1}
            type={type}
          />
          {' '}
          {option}
        </div>
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
