import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function ProvinceSelect(props) {
  const {
    handleChange,
    options,
    placeholder,
    selectedOption,
    title
  } = props;

  return (
    <div className={styles.formRow}>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={title} className={styles.labelTitle}>{title}</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        name={title}
      >
        <option value="">{placeholder}</option>
        {options.map(province => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>
    </div>
  );
}

ProvinceSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  selectedOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  title: PropTypes.string.isRequired,
};
