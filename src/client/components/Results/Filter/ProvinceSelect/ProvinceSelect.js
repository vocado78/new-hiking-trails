import React from 'react';
import { provinceSelectType } from '../../../../utils/types';

import styles from './styles.css';

export default function ProvinceSelect({
  handleChange,
  options,
  placeholder,
  selectedOption,
  title
}) {
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

ProvinceSelect.propTypes = provinceSelectType;
