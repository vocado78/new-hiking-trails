import React from 'react';
import { trailDetailType } from '../../utils/types';
// import Map from './Map/map';
import PageTitle from '../PageTitle/PageTitle';
import Description from './Description/Description';
import KeyFacts from './KeyFacts/KeyFacts';
import styles from './styles.css';

export default function TrailDetail({
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
}) {
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
TrailDetail.propTypes = trailDetailType.isRequired;
