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
import PageTitle from '../PageTitle/PageTitle';
import content from '../../utils/content';


export default class Results extends React.Component {
  static propTypes = {
    location: PropTypes.objectOf(
      PropTypes.string
    ).isRequired
  }

  constructor(props) {
    super(props);
    const {
      services, duration, level, comfort
    } = filterOptions;
    this.state = {
      results: [],
      name: '',
      options: {
        provinces: [],
        services,
        duration,
        level,
        comfort
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
    const trails = region === 'all' ? showAllTrails() : filterByRegion(region);
    const provinces = region === 'all' ? showAllProvinces() : showProvinces(region);

    this.setState({
      results: trails,
      name: region,
      options: {
        ...this.state.options,
        provinces
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { location: { search } } = nextProps;
    const region = queryString.parse(search).region || 'all';
    const trails = region === 'all' ? showAllTrails() : filterByRegion(region);
    const provinces = region === 'all' ? showAllProvinces() : showProvinces(region);

    this.setState({
      results: trails,
      name: region,
      options: {
        ...this.state.options,
        provinces
      }
    });
  }

  handleSelects = (event) => {
    const keys = Object.keys(this.state.selections);
    const inputName = capitalize(event.target.name);
    const key = keys.filter(k => k === `selected${inputName}`);

    if (key[0] === 'selectedLevel') {
      this.handleLevelSelect(event);
    } else {
      this.setState({
        selections: {
          ...this.state.selections,
          [key]: event.target.value
        }
      });
    }
  }

  handleLevelSelect = (event) => {
    const { selections: { selectedLevel } } = this.state;
    const newLevel = event.target.value;
    let newSelectedLevel;
    if (selectedLevel.includes(newLevel)) {
      newSelectedLevel = selectedLevel.filter(level => level !== newLevel);
    } else {
      newSelectedLevel = [...selectedLevel, newLevel];
    }
    this.setState({
      selections: {
        ...this.state.selections,
        selectedLevel: newSelectedLevel
      }
    });
  }

  handleClick = () => {
    const { location: { search } } = this.props;
    const region = queryString.parse(search).region || 'all';
    const trails = region === 'all' ? showAllTrails() : filterByRegion(region);
    const provinces = region === 'all' ? showAllProvinces() : showProvinces(region);
    const {
      services, duration, level, comfort
    } = filterOptions;

    this.setState({
      results: trails,
      name: region,
      options: {
        provinces,
        services,
        duration,
        level,
        comfort
      },
      selections: {
        selectedProvince: '',
        selectedService: '',
        selectedDay: '',
        selectedLevel: [],
        selectedComfort: ''
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
    const { results: { title } } = content;

    return (
      <div className={styles.results}>
        <PageTitle title={`${title} ${region}`} page="Results" />
        <div className={styles.container}>
          <Filter
            region={region}
            options={options}
            selections={selections}
            onSelect={this.handleSelects}
            handleClick={this.handleClick}
          />
          <List
            region={region}
            results={results}
            selections={selections}
          />
        </div>
      </div>
    );
  }
}
