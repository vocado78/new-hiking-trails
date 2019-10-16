import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import ListItem from './ListItem/ListItem';
import config from '../../../../../config';
import TrailContext from '../../../TrailStore/TrailContext';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];


export default class List extends React.Component {
  static contextType = TrailContext;

  render() {
    const {
      trails,
      selections: {
        selectedProvince,
        selectedService,
        selectedDay,
        selectedLevel,
        selectedComfort
      }
    } = this.context;

    const renderListItems = (list) => {
      return list
        .filter((item, i, ar) => ar.indexOf(item) === i)
        .map((trail) => {
          return (
            <Link
              to={{
                pathname: `${homePath}/results/trail-details/${trail.name.replace(' ', '').replace('ö', 'o').toLowerCase()}`,
                state: trail
              }}
              key={trail.name}
            >
              <li>
                <ListItem data={trail} />
              </li>
            </Link>
          );
        });
    };

    // const data = trails;
    let listing = trails;

    if (selectedProvince && selectedProvince.length >= 1) {
      listing = listing.filter(trail => trail.province === selectedProvince);
    }

    if (selectedDay && selectedDay.length >= 1) {
      listing = listing.filter(trail => trail.duration.includes(selectedDay));
    }

    if (selectedLevel && selectedLevel.length >= 1) {
      listing = listing.filter(trail => selectedLevel.includes(trail.level));
    }

    if (selectedComfort && selectedComfort.length >= 1) {
      listing = listing.filter(trail => trail.comfort.includes(selectedComfort));
    }

    if (selectedService && selectedService.length >= 1) {
      listing = listing.filter(trail => trail.services === selectedService);
    }

    return (
      <div className={styles.list}>
        <ul>
          {renderListItems(listing)}
        </ul>
      </div>
    );
  }
}
