import React, { Component } from 'react';

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
        nn: '#bfbfbf',
        sn: '#bfbfbf',
        s: '#bfbfbf',
        ng: '#bfbfbf',
        sg: '#bfbfbf'
      },
      trailList: {}
    };
  }

  componentDidMount() {
    const root = window.location.href;

    fetch(`${root}api/trails`)
      .then((response) => {
        if (response.ok) {
          // console.log(response.json());
          return response.json();
        }
        throw new Error('Thre was a network failure reading from the db.');
      })
      .then((trailList) => {
        this.setState({
          trailList
        });
      })
      .catch(error => `An error occurred fetching trail data from the db: ${error.message}`);
  }

  handleSelect = (event) => {
    this.setState({ region: event.target.value });
    console.log(event.target.value);
  }

  handleMouseEnter = (id) => {
    this.setState({
      regionColor: {
        [id]: '#b3003b'
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
    const { region, regionColor, trailList } = this.state;
    return (
      <div>
        <div className={styles.banner}>
          <div className={styles.bannerContentContainer}>
            <div className={styles.bannerText}>
              <BannerText />
              <RegionSelect
                onChange={this.handleSelect}
                region={region}
                trailList={trailList}
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
        <Welcome />
      </div>
    );
  }
}

// this.handleSelect = this.handleSelect.bind(this);
