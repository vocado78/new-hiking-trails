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
  const renderOptions = () => {
    return options.map((province) => {
      return (
        <option key={province} value={province}>
          {province}
        </option>
      );
    });
  };

  return (
    <div className={styles.formRow}>
      <label htmlFor={title} className={styles.labelTitle}>{title}</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        name={title}
      >
        <option value="">{placeholder}</option>
        {renderOptions()}
      </select>
    </div>
  );
}

ProvinceSelect.propTypes = provinceSelectType;
