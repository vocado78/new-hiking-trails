import React from 'react';
import { checkOrRadioButtonType } from '../../../../../shared/utils/types';

import styles from './styles.css';

export default function CheckOrRadioButton({
  handleChange,
  options,
  selectedOption,
  name,
  title,
  type
}) {
  return (
    <div className={styles.formRow}>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={name} className={styles.labelTitle}>{title}</label>
      {options.map(option => (
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
      ))}
    </div>
  );
}

CheckOrRadioButton.propTypes = checkOrRadioButtonType;
