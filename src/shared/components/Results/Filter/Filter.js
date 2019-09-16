import React from 'react';
import { filterType } from '../../../utils/types';

import styles from './styles.css';
import CheckOrRadioButton from './CheckOrRadioButton/CheckOrRadionButton';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';
import Button from '../../Button/Button';
import content from '../../../utils/content';

export default function Filter({
  region,
  options,
  selections,
  handleClick,
  onSelect
}) {
  const {
    provinces,
    services,
    duration,
    level,
    comfort
  } = options;
  const {
    selectedProvince,
    selectedService,
    selectedDay,
    selectedLevel,
    selectedComfort
  } = selections;
  const {
    results: {
      filter: {
        title, subtitle
      }
    }
  } = content;

  return (
    <form className={styles.filter}>
      <p>{title}</p>
      <p>
        {subtitle}
        {' '}
        {region}
      </p>
      <ProvinceSelect
        title="Province"
        placeholder="Please select"
        handleChange={onSelect}
        options={provinces}
        selectedOption={selectedProvince}
      />
      <CheckOrRadioButton
        title="Number of days I want to hike"
        name="day"
        type="radio"
        handleChange={onSelect}
        options={duration}
        selectedOption={selectedDay}
      />
      <CheckOrRadioButton
        title="Level of Difficulty"
        name="level"
        type="checkbox"
        handleChange={onSelect}
        options={level}
        selectedOption={selectedLevel}
      />
      <CheckOrRadioButton
        title="Comfort"
        name="comfort"
        type="radio"
        handleChange={onSelect}
        options={comfort}
        selectedOption={selectedComfort}
      />
      <CheckOrRadioButton
        title="Services availability"
        name="service"
        type="radio"
        handleChange={onSelect}
        options={services}
        selectedOption={selectedService}
      />
      <Button
        label="Clear All Filters"
        handleClick={handleClick}
      />
    </form>
  );
}

Filter.propTypes = filterType;