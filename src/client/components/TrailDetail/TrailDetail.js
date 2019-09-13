import React, { Component } from 'react';
import { trailDetailType } from '../../utils/types';
// import Map from './Map/map';
import PageTitle from '../PageTitle/PageTitle';
import Description from './Description/Description';
import KeyFacts from './KeyFacts/KeyFacts';
import Button from '../Button/Button';
import styles from './styles.css';

export default class TrailDetail extends Component {
  static propTypes = trailDetailType.isRequired;

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
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
    } = this.props;

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
        <Button label="<- Back to Results" handleClick={this.handleClick} />
      </div>
    );
  }
}
