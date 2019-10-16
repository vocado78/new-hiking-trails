import React, { Component } from 'react';
import { regions } from '../../../utils/helpers';

import styles from './styles.css';
import Button from '../../Button/Button';
import config from '../../../../../config';
import { TrailContext } from '../../../TrailStore/TrailContext';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];

export default class RegionSelect extends Component {
  static contextType = TrailContext;

  render() {
    const { region, onRegionSelect } = this.context;

    return (
      <form className={styles.form}>
        <select
          className={styles.select}
          value={region}
          onChange={e => onRegionSelect(e)}
        >
          {regions.map(item => <option key={item.label} value={item.value}>{item.label}</option>)}
        </select>
        <Button
          path={`${homePath}/results/${region}`}
          label="Go"
        />
      </form>
    );
  }
}
