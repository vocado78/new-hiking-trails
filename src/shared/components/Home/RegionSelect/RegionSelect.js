import React, { Component } from 'react';
import { regions } from '../../../utils/helpers';

import styles from './styles.css';
import Button from '../../Button/Button';
import config from '../../../../../config';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];

export default class RegionSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: ''
    };
  }

  handleSelect = (event) => {
    this.setState({ region: event.target.value });
  }

  render() {
    const { region } = this.state;

    return (
      <form className={styles.form}>
        <select
          className={styles.select}
          value={region}
          onChange={this.handleSelect}
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
