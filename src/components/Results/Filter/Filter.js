import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import CheckOrRadioButton from './CheckOrRadioButton/CheckOrRadionButton';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';
import Button from '../../Button/Button';

export default function Filter(props) {
  const {
    region,
    options: {
      provinces,
      services,
      duration,
      level,
      comfort
    },
    selections: {
      selectedProvince,
      selectedService,
      selectedDay,
      selectedLevel,
      selectedComfort
    },
    onSelect
  } = props;

  return (
    <form className={styles.filter}>
      <p>Filter your results</p>
      <p>
        Selected region:
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
        path="/results"
        searchString="?region=all"
        label="Clear All Filters"
      />
    </form>
  );
}

Filter.propTypes = {
  region: PropTypes.string.isRequired,
  options: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
  selections: PropTypes.shape({
    selectedProvince: PropTypes.string,
    selectedComfort: PropTypes.string,
    selectedDay: PropTypes.string,
    selectedLevel: PropTypes.arrayOf(PropTypes.string),
    selectedService: PropTypes.string
  }).isRequired,
  onSelect: PropTypes.func.isRequired
};
