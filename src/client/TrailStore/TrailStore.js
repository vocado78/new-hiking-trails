/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* global __isBrowser__ */

import React, { Component } from 'react';

import { TrailContext } from './TrailContext';
import fetchTrails from '../../shared/utils/api';
import {
  capitalize,
  showTrails,
  showProvinces
} from '../../shared/utils/helpers';

export default class TrailStore extends Component {
  constructor(props) {
    super(props);

    let initialState;
    if (__isBrowser__) {
      initialState = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      initialState = this.props;
      // staticContext can only be accessed from the component being rendered by the server
      console.log('staticContext props in trailstore is:', initialState);
    }

    this.state = {
      trails: initialState.trails || [],
      trail: initialState.trail || {},
      region: initialState.region || '',
      provinces: initialState.provinces || [],
      selections: {
        selectedProvince: '',
        selectedService: '',
        selectedDay: '',
        selectedLevel: [],
        selectedComfort: ''
      }
    };
  }

  // if no region is provided by server, will not be one until user chooses one
  // we won't need any trails on client side until a region exists on the state object

  handleRegionSelect = (event) => {
    // also update trails and provinces when region changes
    const region = event.target.value;

    fetchTrails()
      .then((trailData) => {
        this.setState({
          trails: showTrails(trailData, region),
          region,
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
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </TrailContext.Provider>
    );
  }
}
