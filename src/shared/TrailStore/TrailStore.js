/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import { TrailContext } from './TrailContext';
import fetchTrails from '../utils/api';
import {
  capitalize,
  showTrails,
  showProvinces
} from '../utils/helpers';

export default class TrailStore extends Component {
  constructor(props) {
    super(props);

    const { trails, trail, region, provinces } = this.props.initialState;

    this.state = {
      trails: trails || [],
      trail: trail || {},
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

  handleRegionSelect = (event) => {
    const region = event.target.value;

    this.setState({ region });
    this.getTrails(region);
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
    const keys = Object.keys(selections);
    const inputName = capitalize(event.target.name);
    const key = keys.filter(k => k === `selected${inputName}`);

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

  render() {
    return (
      <TrailContext.Provider value={{ ...this.state, onRegionSelect: this.handleRegionSelect, onSelect: this.handleSelects, onClick: this.handleClick }}>
        {this.props.children}
      </TrailContext.Provider>
    );
  }
}
