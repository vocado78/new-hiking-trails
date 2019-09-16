/* eslint-disable react/prop-types */
/* global __isBrowser__ */

import React from 'react';

import styles from './styles.css';
import {
  capitalize,
  showTrails,
  showProvinces,
  filterOptions,
  unSanitize
} from '../../utils/helpers';
import Filter from './Filter/Filter';
import List from './List/List';
import PageTitle from '../PageTitle/PageTitle';
import content from '../../utils/content';
import { TrailContext } from '../../../client/TrailStore/TrailContext';
import NotFound from '../NotFound/NotFound';


class Results extends React.Component {
  constructor(props) {
    super(props);
    const {
      services, duration, level, comfort
    } = filterOptions;

    // eslint-disable-next-line prefer-destructuring
    const region = this.props.match.params.region;
    // eslint-disable-next-line no-underscore-dangle
    const trails = __isBrowser__ ? showTrails(window.__INITIAL_DATA__, region)
      : showTrails(this.props.staticContext.data, region);
    const provinces = showProvinces(region);

    this.state = {
      results: trails || [],
      name: region || '',
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
    };
  }

  componentDidMount() {
    if (!this.state.results) {
      this.updateData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.region !== this.props.match.params.region) {
      this.updateData();
    }
  }

  handleSelects = (event) => {
    const keys = Object.keys(this.state.selections);
    const inputName = capitalize(event.target.name);
    const key = keys.filter(k => k === `selected${inputName}`);
    const { selections } = this.state;

    if (key[0] === 'selectedLevel') {
      this.handleLevelSelect(event);
    } else {
      this.setState({
        selections: {
          ...selections,
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
    this.setState(prevState => ({
      selections: {
        ...prevState.selections,
        selectedLevel: newSelectedLevel
      }
    }));
  }

  handleClick = () => {
    const region = window.location.pathname.split('/').pop();
    const trails = showTrails(this.context, region);
    const provinces = showProvinces(region);
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

  updateData = () => {
    const region = window.location.pathname.split('/').pop();
    const trails = showTrails(this.context, region);
    const provinces = showProvinces(region);

    this.setState(prevState => ({
      results: trails,
      name: region,
      options: {
        ...prevState.options,
        provinces
      }
    }));
  }

  render() {
    const {
      results,
      name,
      options,
      selections
    } = this.state;

    if (!results.length) {
      return <NotFound />;
    }

    const region = unSanitize(name);
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
            results={results}
            selections={selections}
          />
        </div>
      </div>
    );
  }
}

Results.contextType = TrailContext;

export default Results;
