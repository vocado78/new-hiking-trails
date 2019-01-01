import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import styles from './styles.css';
import {
  filterByRegion,
  capitalize,
  showAllTrails,
  showAllProvinces,
  showProvinces,
  filterOptions
} from './utils/helpers';
import Filter from './Filter/Filter';
import List from './List/List';


export default class Results extends React.Component {
  static propTypes = {
    location: PropTypes.objectOf(
      PropTypes.string
    ).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      name: '',
      options: {
        provinces: [],
        services: [],
        duration: [],
        level: [],
        comfort: [],
      },
      selections: {
        selectedProvince: '',
        selectedService: '',
        selectedDay: '',
        selectedLevel: [],
        selectedComfort: ''
      }
    };
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const region = queryString.parse(search).region || 'all';
    const {
      services, duration, level, comfort
    } = filterOptions;
    const trails = region === 'all' ? showAllTrails() : filterByRegion(region);
    const provinces = region === 'all' ? showAllProvinces() : showProvinces(region);

    this.setState({
      results: trails,
      name: region,
      options: {
        provinces,
        services,
        duration,
        level,
        comfort
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { location: { search } } = nextProps;
    const region = queryString.parse(search).region || 'all';
    const {
      services, duration, level, comfort
    } = filterOptions;
    const trails = region === 'all' ? showAllTrails() : filterByRegion(region);
    const provinces = region === 'all' ? showAllProvinces() : showProvinces(region);

    this.setState({
      results: trails,
      name: region,
      options: {
        provinces,
        services,
        duration,
        level,
        comfort
      }
    });
  }

  handleProvinceSelect = (event) => {
    this.setState({
      selections: {
        selectedProvince: event.target.value
      }
    });
  }

  handleDaySelect = (event) => {
    this.setState({
      selections: {
        selectedDay: event.target.value
      }
    });
  }

  handleLevelSelect = (event) => {
    const { selectedLevel } = this.state;
    const newLevel = event.target.value;
    let newSelArr;
    if (selectedLevel.includes(newLevel)) {
      newSelArr = selectedLevel.filter(level => level !== newLevel);
    } else {
      newSelArr = [...selectedLevel, newLevel];
    }
    this.setState({
      selections: {
        selectedLevel: newSelArr
      }
    });
  }

  handleComfortSelect = (event) => {
    this.setState({
      selections: {
        selectedComfort: event.target.value
      }
    });
  }

  handleServiceSelect = (event) => {
    this.setState({
      selections: {
        selectedService: event.target.value
      }
    });
  }

  render() {
    const {
      results,
      name,
      options,
      selections
    } = this.state;
    const region = capitalize(name);

    return (
      <div className={styles.results}>
        <Filter
          region={region}
          options={options}
          selections={selections}
          onProvinceSelect={this.handleProvinceSelect}
          onServiceSelect={this.handleServiceSelect}
          onDaySelect={this.handleDaySelect}
          onLevelSelect={this.handleLevelSelect}
          onComfortSelect={this.handleComfortSelect}
        />
        <List
          region={region}
          results={results}
          selections={selections}
        />
      </div>
    );
  }
}

// TODO: combine 4 handlers into one?
