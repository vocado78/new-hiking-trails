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
    onProvinceSelect,
    onDaySelect,
    onLevelSelect,
    onComfortSelect,
    onServiceSelect
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
        handleChange={onProvinceSelect}
        options={provinces}
        selectedOption={selectedProvince}
      />
      <CheckOrRadioButton
        title="Number of days I want to hike"
        name="days"
        type="radio"
        handleChange={onDaySelect}
        options={duration}
        selectedOption={selectedDay}
      />
      <CheckOrRadioButton
        title="Level of Difficulty"
        name="level"
        type="checkbox"
        handleChange={onLevelSelect}
        options={level}
        selectedOption={selectedLevel}
      />
      <CheckOrRadioButton
        title="Comfort"
        name="comfort"
        type="radio"
        handleChange={onComfortSelect}
        options={comfort}
        selectedOption={selectedComfort}
      />
      <CheckOrRadioButton
        title="Services availability"
        name="services"
        type="radio"
        handleChange={onServiceSelect}
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
  onProvinceSelect: PropTypes.func.isRequired,
  onDaySelect: PropTypes.func.isRequired,
  onLevelSelect: PropTypes.func.isRequired,
  onComfortSelect: PropTypes.func.isRequired,
  onServiceSelect: PropTypes.func.isRequired
};
