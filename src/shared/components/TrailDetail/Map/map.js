/* eslint-disable no-unused-vars */
/* global google */

import React from 'react';
import styles from './styles.css';
import { mapType } from '../../../utils/types';


export default class Map extends React.Component {
  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trail.startLat !== this.props.trail.startLat) {
      this.createMap();
    }
  }

  createPin = color => ({
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
    fillColor: color,
    fillOpacity: 1,
    strokeColor: '#000',
    strokeWeight: 2,
    scale: 1
  })

  createMap = () => {
    const start = new google.maps.LatLng(this.props.trail.startLat, this.props.trail.startLon);
    const finish = new google.maps.LatLng(this.props.trail.finLat, this.props.trail.finLon);
    const middle = new google.maps.LatLng(this.props.trail.midLat, this.props.trail.midLon);
    const options = { center: middle, zoom: 8 };
    const trailMap = new google.maps.Map(document.getElementById('map'), options);

    const startMarker = new google.maps.Marker({
      position: start,
      map: trailMap,
      title: 'Start',
      icon: this.createPin('green')
    });

    const finishMarker = new google.maps.Marker({
      position: finish,
      map: trailMap,
      title: 'Finish',
      icon: this.createPin('red')
    });
  }

  render() {
    return (
      <div id="map" className={styles.map} />
    );
  }
}

Map.propTypes = mapType.isRequired;
