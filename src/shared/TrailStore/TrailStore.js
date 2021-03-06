import React, { Component } from 'react';

import { trailStoreType } from '../utils/types';
import TrailContext from './TrailContext';
import fetchTrails from '../utils/api';
import { showTrails, showProvinces } from '../utils/helpers';


export default class TrailStore extends Component {
  constructor(props) {
    super(props);

    const { trails, trail, region, provinces } = this.props.initialState;

    this.state = {
      trails: trails || [],
      trail: trail || null,
      region: region || '',
      provinces: provinces || [],
      selections: {
        selectedProvince: '',
        selectedService: '',
        selectedDay: '',
        selectedLevel: [],
        selectedComfort: ''
      }
    };
  }

  handleRegionSelect = (event, id = '') => {
    const region = event ? event.target.value : id;

    this.setState({ region });
    this.getTrails(region);
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

  handleSelects = (event) => {
    const { selections } = this.state;
    const selectType = Object.keys(selections).filter((key) => {
      return key === `selected${event.target.name}`;
    });

    if (selectType[0] === 'selectedLevel') {
      this.handleLevelSelect(event);
    } else {
      this.setState({
        selections: {
          ...selections,
          [selectType]: event.target.value
        }
      });
    }
  }

  handleClick = () => {
    const { trails, region, provinces } = this.state;

    this.setState({
      trails,
      region,
      provinces,
      selections: {
        selectedProvince: '',
        selectedService: '',
        selectedDay: '',
        selectedLevel: [],
        selectedComfort: ''
      }
    });
  }

  getTrails = (region) => {
    fetchTrails()
      .then((trailData) => {
        this.setState({
          trails: showTrails(trailData, region),
          provinces: showProvinces(region)
        });
      });
  }

  render() {
    return (
      <TrailContext.Provider value={{ ...this.state, onRegionSelect: this.handleRegionSelect, onSelect: this.handleSelects, onClick: this.handleClick }}>
        {this.props.children}
      </TrailContext.Provider>
    );
  }
}

TrailStore.propTypes = trailStoreType;
