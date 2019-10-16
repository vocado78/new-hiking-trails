import React from 'react';
import { checkOrRadioButtonType } from '../../../../utils/types';

import styles from './styles.css';

export default function CheckOrRadioButton({
  handleChange,
  options,
  selectedOption,
  name,
  title,
  type
}) {
  const renderOptions = () => {
    return options.map((option) => {
      return (
        <div key={option}>
          <input
            name={name}
            onChange={handleChange}
            value={option}
            checked={selectedOption.indexOf(option) > -1}
            type={type}
          />
          {' '}
          {option}
        </div>
      );
    });
  };

  return (
    <div className={styles.formRow}>
      <label htmlFor={name} className={styles.labelTitle}>{title}</label>
      {renderOptions()}
    </div>
  );
}

CheckOrRadioButton.propTypes = checkOrRadioButtonType;
