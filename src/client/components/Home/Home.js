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
      },
      trailData: {}
    };
  }

  componentDidMount() {
    const root = window.location.href;

    fetch(`${root}api/trails`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('There was a network failure reading from the db.');
      })
      .then((trailData) => {
        this.setState({
          trailData
        });
      })
      .catch(error => `An error occurred fetching trail data: ${error.message}`);
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
    const { region, regionColor, trailData } = this.state;
    return (
      <div>
        <div className={styles.banner}>
          <div className={styles.bannerContentContainer}>
            <div className={styles.bannerText}>
              <BannerText />
              <RegionSelect
                onChange={this.handleSelect}
                region={region}
                trailData={trailData}
              />
            </div>
            <div className={styles.regionMap}>
              <Link
                to={{
                  pathname: '/results',
                  search: `?region=${region}`,
                  state: trailData
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

// this.handleSelect = this.handleSelect.bind(this);
