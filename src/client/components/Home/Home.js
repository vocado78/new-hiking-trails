import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import RegionSelect from './RegionSelect/RegionSelect';
import RegionMap from './RegionMap/RegionMap';
import BannerText from './BannerText/BannerText';
import Welcome from './Welcome/Welcome';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: '',
      regionColor: {
        'northern-norrland': '#bfbfbf',
        'southern-norrland': '#bfbfbf',
        svealand: '#bfbfbf',
        'northern-gotaland': '#bfbfbf',
        'southern-gotaland': '#bfbfbf'
      }
    };
  }

  handleSelect = (event) => {
    this.setState({ region: event.target.value });
  }

  handleMouseEnter = (id) => {
    this.setState({
      region: id,
      regionColor: {
        [id]: '#b3003b'
      }
    });
  }

  handleMouseLeave = (id) => {
    this.setState({
      region: '',
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
              <Link
                to={{
                  pathname: '/results',
                  search: `?region=${region}`
                }}
              >
                <RegionMap
                  regionColor={regionColor}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                />
              </Link>
            </div>
          </div>
        </div>
        <Welcome />
      </div>
    );
  }
}
