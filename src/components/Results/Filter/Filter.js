import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import CheckOrRadioButton from './CheckOrRadioButton/CheckOrRadionButton';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';
import Button from '../../Button/Button';

export default function Filter(props) {
  const {
    region,
    onProvinceSelect,
    provinces,
    selectedProvince,
    onDaySelect,
    dayOptions,
    selectedDay,
    onLevelSelect,
    levelOptions,
    selectedLevel,
    onComSelect,
    comOptions,
    selectedCom,
    onServSelect,
    servOptions,
    selectedServ
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
        handleFunc={onProvinceSelect}
        options={provinces}
        selectedOption={selectedProvince}
      />
      <CheckOrRadioButton
        title="Number of days I want to hike"
        setName="days"
        type="radio"
        handleFunc={onDaySelect}
        options={dayOptions}
        selectedOption={selectedDay}
      />
      <CheckOrRadioButton
        title="Level of Difficulty"
        setName="level"
        type="checkbox"
        handleFunc={onLevelSelect}
        options={levelOptions}
        selectedOption={selectedLevel}
      />
      <CheckOrRadioButton
        title="Comfort"
        setName="comfort"
        type="radio"
        handleFunc={onComSelect}
        options={comOptions}
        selectedOption={selectedCom}
      />
      <CheckOrRadioButton
        title="Services availability"
        setName="services"
        type="radio"
        handleFunc={onServSelect}
        options={servOptions}
        selectedOption={selectedServ}
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
  onProvinceSelect: PropTypes.func.isRequired,
  provinces: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedProvince: PropTypes.string.isRequired,
  onDaySelect: PropTypes.func.isRequired,
  dayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDay: PropTypes.string.isRequired,
  onLevelSelect: PropTypes.func.isRequired,
  levelOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedLevel: PropTypes.arrayOf(PropTypes.string).isRequired,
  onComSelect: PropTypes.func.isRequired,
  comOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCom: PropTypes.string.isRequired,
  onServSelect: PropTypes.func.isRequired,
  servOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedServ: PropTypes.string.isRequired
};
