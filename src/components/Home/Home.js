import React, { Component } from 'react';

import styles from './styles.css';
import RegionSelect from './RegionSelect/RegionSelect';
import RegionMap from './RegionMap/RegionMap';
import BannerText from './BannerText/BannerText';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: '',
      regionColor: {
        nn: '#bfbfbf',
        sn: '#bfbfbf',
        s: '#bfbfbf',
        ng: '#bfbfbf',
        sg: '#bfbfbf'
      }
    };
  }

  handleSelect = (event) => {
    this.setState({ region: event.target.value });
    console.log(event.target.value);
  }

  handleMouseEnter = (id) => {
    this.setState({
      regionColor: {
        [id]: '#cc0099'
      }
    });
  }

  handleMouseLeave = (id) => {
    this.setState({
      regionColor: {
        [id]: '#bfbfbf'
      }
    });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { region, regionColor } = this.state;
    return (
      <div>
        <div className={styles.banner}>
          <div className={styles.bannerContentContainer}>
            <div className={styles.bannerText}>
              <BannerText />
              <RegionSelect
                onChange={this.handleSelect}
                region={region}
              />
            </div>
            <div className={styles.regionMap}>
              <RegionMap
                regionColor={regionColor}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// this.handleSelect = this.handleSelect.bind(this);
