import React, { Component } from 'react';

import { trailDetailType } from '../../utils/types';
import Map from './Map/Map';
import PageTitle from '../PageTitle/PageTitle';
import Description from './Description/Description';
import KeyFacts from './KeyFacts/KeyFacts';
import Button from '../Button/Button';
import styles from './styles.css';
import TrailContext from '../../TrailStore/TrailContext';
// import NotFound from '../NotFound/NotFound';


export default class TrailDetail extends Component {
  static propTypes = trailDetailType;

  static contextType = TrailContext;

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    // FIX rendering of not found component
    // if (!this.state.trailData) {
    //   return <NotFound />;
    // }

    let trail = {};
    if (this.context.trail) {
      ({ trail } = this.context);
    } else {
      trail = this.props.location.state;
    }

    return (
      <div className={styles.detailContainer}>
        <PageTitle
          page="Trail Details"
          title={trail.name}
        />
        <div className={styles.detailTextMapContainer}>
          <Description trail={trail} />
          <Map trail={trail} />
        </div>
        <KeyFacts trail={trail} />
        <Button label="<- Back to Results" handleClick={this.handleClick} />
      </div>
    );
  }
}
