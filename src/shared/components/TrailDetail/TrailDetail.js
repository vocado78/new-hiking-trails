import React, { Component } from 'react';

import { trailDetailType } from '../../utils/types';
import Map from './Map/map';
import PageTitle from '../PageTitle/PageTitle';
import Description from './Description/Description';
import KeyFacts from './KeyFacts/KeyFacts';
import Button from '../Button/Button';
import styles from './styles.css';
import { TrailContext } from '../../../client/TrailStore/TrailContext';

export default class TrailDetail extends Component {
  static propTypes = trailDetailType.isRequired;

  constructor(props) {
    super(props);
    let trailData;

    // eslint-disable-next-line no-undef
    if (!__isBrowser__) {
      ({
        trailData
      // eslint-disable-next-line react/prop-types
      } = this.props.staticContext);
    } else {
      const trailName = window.location.pathname.split('/').pop();
      // eslint-disable-next-line no-underscore-dangle
      trailData = window.__INITIAL_DATA__[trailName];
    }

    this.state = {
      trailData
    };
  }

  componentDidMount() {
    if (!this.state.trailData) {
      this.updateData();
    }
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/prop-types
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.updateData();
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  updateData = () => {
    const trail = this.context[this.props.match.params.id];

    this.setState({
      trailData: trail
    });
  }

  render() {
    const {
      trailData: {
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
        startLat,
        startLon,
        finLat,
        finLon,
        middleLat,
        middleLon
      }
    } = this.state;

    return (
      <div className={styles.detailContainer}>
        <PageTitle
          page="Trail Details"
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
          <Map
            startLat={startLat}
            startLon={startLon}
            finLat={finLat}
            finLon={finLon}
            midLat={middleLat}
            midLon={middleLon}
          />
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

TrailDetail.contextType = TrailContext;
