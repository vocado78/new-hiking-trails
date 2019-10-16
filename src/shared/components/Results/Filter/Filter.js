import React from 'react';
// import { filterType } from '../../../utils/types';

import styles from './styles.css';
import CheckOrRadioButton from './CheckOrRadioButton/CheckOrRadionButton';
import ProvinceSelect from './ProvinceSelect/ProvinceSelect';
import Button from '../../Button/Button';
import content from '../../../utils/content';
import { TrailContext } from '../../../TrailStore/TrailContext';
import { filterOptions, sanitize } from '../../../utils/helpers';


export default class Filter extends React.Component {
  static contextType = TrailContext;

  render() {
    const { services, duration, level, comfort } = filterOptions;
    const { results: { filter: { title, subtitle } } } = content;
    const {
      region,
      provinces,
      selections: {
        selectedProvince,
        selectedService,
        selectedDay,
        selectedLevel,
        selectedComfort
      },
      onSelect,
      onClick
    } = this.context;

    return (
      <form className={styles.filter}>
        <p>{title}</p>
        <p>
          {subtitle}
          {' '}
          {sanitize(region)}
        </p>
        <ProvinceSelect
          title="Province"
          placeholder="Please select"
          handleChange={e => onSelect(e)}
          options={provinces}
          selectedOption={selectedProvince}
        />
        <CheckOrRadioButton
          title="Number of days I want to hike"
          name="Day"
          type="radio"
          handleChange={e => onSelect(e)}
          options={duration}
          selectedOption={selectedDay}
        />
        <CheckOrRadioButton
          title="Level of Difficulty"
          name="Level"
          type="checkbox"
          handleChange={e => onSelect(e)}
          options={level}
          selectedOption={selectedLevel}
        />
        <CheckOrRadioButton
          title="Comfort"
          name="Comfort"
          type="radio"
          handleChange={e => onSelect(e)}
          options={comfort}
          selectedOption={selectedComfort}
        />
        <CheckOrRadioButton
          title="Services availability"
          name="Service"
          type="radio"
          handleChange={e => onSelect(e)}
          options={services}
          selectedOption={selectedService}
        />
        <Button
          label="Clear All Filters"
          handleClick={onClick}
        />
      </form>
    );
  }
}

// Filter.propTypes = filterType;
