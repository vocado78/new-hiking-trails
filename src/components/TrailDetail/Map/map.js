/* global google */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class Map extends React.Component {
  static propTypes = {
    startLat: PropTypes.number.isRequired,
    startLon: PropTypes.number.isRequired,
    midLat: PropTypes.number.isRequired,
    midLon: PropTypes.number.isRequired,
    finLat: PropTypes.number.isRequired,
    finLon: PropTypes.number.isRequired
  };

  componentDidMount() {
    const start = new google.maps.LatLng(this.props.startLat, this.props.startLon);
    const finish = new google.maps.LatLng(this.props.finLat, this.props.finLon);
    const middle = new google.maps.LatLng(this.props.midLat, this.props.midLon);
    const options = { center: middle, zoom: 8 };
    const trailMap = new google.maps.Map(document.getElementById('map'), options);

    const trailPath = new google.maps.Polyline({
      path: [start, finish],
      strokeColor: '#CC0099',
      strokeWeight: 2
    });
    trailPath.setMap(trailMap);
  }

  componentWillReceiveProps(nextProps) {
    const start = new google.maps.LatLng(nextProps.startLat, nextProps.startLon);
    const finish = new google.maps.LatLng(nextProps.finLat, nextProps.finLon);
    const middle = new google.maps.LatLng(nextProps.midLat, nextProps.midLon);
    const options = { center: middle, zoom: 8 };
    const trailMap = new google.maps.Map(document.getElementById('map'), options);

    const trailPath = new google.maps.Polyline({
      path: [start, finish],
      strokeColor: '#CC0099',
      strokeWeight: 2
    });
    trailPath.setMap(trailMap);
  }

  render() {
    return (
      <div id="map" className={styles.map} />
    );
  }
}
