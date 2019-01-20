import React from 'react';
import PropTypes from 'prop-types';
// import Map from './Map/Map';
import PageTitle from '../PageTitle/PageTitle';
import Description from './Description/Description';
import KeyFacts from './KeyFacts/KeyFacts';
import styles from './styles.css';

export default function TrailDetail(props) {
  const {
    location: {
      state: {
        name,
        access,
        complete,
        connect,
        description,
        distance,
        duration,
        finish,
        landscape,
        level,
        moreInfo,
        province,
        stageDistances,
        stages,
        start,
        comfort,
        // startLat,
        // startLon,
        // finLat,
        // finLon,
        // middleLat,
        // middleLon
      }
    }
  } = props;

  return (
    <div className={styles.detailContainer}>
      <PageTitle
        page="Trail details"
        title={name}
      />
      <div className={styles.detailTextMapContainer}>
        <Description
          access={access}
          complete={complete}
          description={description}
          landscape={landscape}
          moreInfo={moreInfo}
        />
        {/* <Map
          startLat={startLat}
          startLon={startLon}
          finLat={finLat}
          finLon={finLon}
          midLat={middleLat}
          midLon={middleLon}
        /> */}
      </div>
      <KeyFacts
        connect={connect}
        distance={distance}
        duration={duration}
        finish={finish}
        level={level}
        province={province}
        stageDistances={stageDistances}
        stages={stages}
        start={start}
        comfort={comfort}
      />
    </div>
  );
}
/* eslint-disable */
TrailDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      name: PropTypes.string,
      region: PropTypes.string,
      province: PropTypes.string,
      start: PropTypes.string,
      finish: PropTypes.string,
      startLat: PropTypes.number,
      startLon: PropTypes.number,
      middleLat: PropTypes.number,
      middleLon: PropTypes.number,
      finLat: PropTypes.number,
      finLon: PropTypes.number,
      distance: PropTypes.string,
      duration: PropTypes.arrayOf(PropTypes.string),
      complete: PropTypes.string,
      level: PropTypes.string,
      comfort: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      description: PropTypes.string,
      landscape: PropTypes.string,
      connect: PropTypes.string,
      stageDistances: PropTypes.string,
      services: PropTypes.string,
      stages: PropTypes.number,
      access: PropTypes.string,
      moreInfo: PropTypes.string
    })
  })
};
