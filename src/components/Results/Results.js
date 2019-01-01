import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import styles from './styles.css';
import {
  filterByRegion,
  capitalize,
  showAllTrails,
  showAllProvinces,
  showProvinces
} from './utils/helpers';
import Filter from './Filter/Filter';
import List from './List/List';


export default class Results extends React.Component {
  propTypes = {
    location: PropTypes.objectOf(
      PropTypes.string
    ).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      name: '',
      provinces: [],
      selectedProvince: '',
      services: [],
      selectedServ: '',
      duration: [],
      selectedDay: '',
      level: [],
      selectedLevel: [],
      comfort: [],
      selectedCom: ''
    };
    this.handleProvinceSelect = this.handleProvinceSelect.bind(this);
    this.handleServSelect = this.handleServSelect.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.handleLevelSelect = this.handleLevelSelect.bind(this);
    this.handleComSelect = this.handleComSelect.bind(this);
    // this.handleClearFilter = this.handleClearFilter.bind(this);
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const region = queryString.parse(search).region || 'all';
    let display;
    let list;

    if (region === 'all') {
      list = showAllTrails();
      display = showAllProvinces();
    } else {
      list = filterByRegion(region);
      display = showProvinces(region);
    }

    this.setState({
      results: list,
      name: region,
      provinces: display,
      services: ['Satisfactory', 'Good', 'Very good'],
      duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
      level: ['Easy', 'Easy to moderate', 'Moderate', 'Moderate to difficult',
        'Difficult'],
      comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
      selectedProvince: '',
      selectedDay: '',
      selectedLevel: [],
      selectedCom: '',
      selectedServ: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    const { location: { search } } = nextProps;
    const region = queryString.parse(search).region || 'all';
    let display;
    let list;

    if (region === 'all') {
      list = showAllTrails();
      display = showAllProvinces();
    } else {
      list = filterByRegion(region);
      display = showProvinces(region);
    }

    this.setState({
      results: list,
      name: region,
      provinces: display,
      services: ['Satisfactory', 'Good', 'Very good'],
      duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
      level: ['Easy', 'Easy to moderate', 'Moderate', 'Moderate to difficult',
        'Difficult'],
      comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
      selectedProvince: '',
      selectedDay: '',
      selectedLevel: [],
      selectedCom: '',
      selectedServ: ''
    });
  }

  handleProvinceSelect(event) {
    this.setState({ selectedProvince: event.target.value });
  }

  handleDaySelect(event) {
    this.setState({ selectedDay: event.target.value });
  }

  handleLevelSelect(event) {
    const { selectedLevel } = this.state;
    const newLevel = event.target.value;
    let newSelArr;
    if (selectedLevel.includes(newLevel)) {
      newSelArr = selectedLevel.filter(level => level !== newLevel);
    } else {
      newSelArr = [...selectedLevel, newLevel];
    }
    this.setState({ selectedLevel: newSelArr });
  }

  handleComSelect(event) {
    this.setState({ selectedCom: event.target.value });
  }

  handleServSelect(event) {
    this.setState({ selectedServ: event.target.value });
  }

  /* handleClearFilter(event) {
    event.preventDefault();
    this.setState({
      selectedProvince: "",
      selectedDay: "",
      selectedLevel: [],
      selectedCom: "",
      selectedServ: ""
    });
  } */

  render() {
    const {
      name,
      provinces,
      selectedProvince,
      services,
      selectedServ,
      duration,
      selectedCom,
      selectedDay,
      selectedLevel,
      level,
      comfort,
      results
    } = this.state;
    const region = capitalize(name);

    return (
      <div className={styles.results}>
        <Filter
          region={region}
          provinces={provinces}
          onProvinceSelect={this.handleProvinceSelect}
          selectedProvince={selectedProvince}
          servOptions={services}
          selectedServ={selectedServ}
          onServSelect={this.handleServSelect}
          dayOptions={duration}
          selectedDay={selectedDay}
          onDaySelect={this.handleDaySelect}
          levelOptions={level}
          selectedLevel={selectedLevel}
          onLevelSelect={this.handleLevelSelect}
          comOptions={comfort}
          selectedCom={selectedCom}
          onComSelect={this.handleComSelect}
        />
        <List
          region={region}
          list={results}
          prov={selectedProvince}
          day={selectedDay}
          level={selectedLevel}
          comfort={selectedCom}
          services={selectedServ}
        />
      </div>
    );
  }
}
// onClearFilter={this.handleClearFilter}
