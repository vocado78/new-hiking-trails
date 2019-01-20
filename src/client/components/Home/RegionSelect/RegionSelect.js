import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import Button from '../../Button/Button';

const regions = [
  {
    label: 'Please select region',
    value: ''
  },
  {
    label: 'Northern Norrland',
    value: 'northern-norrland'
  },
  {
    label: 'Southern Norrland',
    value: 'southern-norrland'
  },
  {
    label: 'Svealand',
    value: 'svealand'
  },
  {
    label: 'Northern Götaland',
    value: 'northern-gotaland'
  },
  {
    label: 'Southern Götaland',
    value: 'southern-gotaland'
  },
  {
    label: 'Show all',
    value: 'all'
  }
];

export default function RegionSelect(props) {
  const {
    region,
    onChange
  } = props;

  return (
    <form className={styles.form}>
      <select
        className={styles.select}
        value={region}
        onChange={onChange}
      >
        {regions.map(item => <option key={item.label} value={item.value}>{item.label}</option>)}
      </select>
      <Button
        path="/results"
        searchString={`?region=${region}`}
        label="Go"
      />
    </form>
  );
}

RegionSelect.propTypes = {
  region: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
