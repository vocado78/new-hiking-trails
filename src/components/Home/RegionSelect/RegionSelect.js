import React from 'react';
// import { Link } from 'react-router-dom';

import styles from './styles.css';

export default class RegionSelect extends React.Component {
  static regions = [
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

  constructor(props) {
    super(props);
    this.state = {
      region: ''
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  handleSelect(event) {
    this.setState({ region: event.target.value });
    console.log(event.target.value);
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
          {RegionSelect.regions.map(item => <option key={item.label} value={item.value}>{item.label}</option>)}
        </select>
        <a className={styles.button} href="/">Go</a>
        {/* <Link className={styles.button}
          to={{
            pathname: "/results",
            search: "?region=" + this.state.region
          }}>Go</Link> */}

      </form>
    );
  }
}
