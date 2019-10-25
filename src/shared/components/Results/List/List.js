import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import ListItem from './ListItem/ListItem';
import config from '../../../../../config';
import TrailContext from '../../../TrailStore/TrailContext';
import filterList from './helpers';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];


export default class List extends React.Component {
  static contextType = TrailContext;

  static renderListItems(list) {
    return list
      .filter((item, i, ar) => ar.indexOf(item) === i)
      .map((trail) => {
        const name = trail.name.replace(' ', '').replace('ö', 'o').toLowerCase();

        return (
          <Link
            to={{
              pathname: `${homePath}/results/trail-details/${name}`,
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
  }

  render() {
    const { trails, selections } = this.context;
    const list = filterList(trails, selections);

    return (
      <div className={styles.list}>
        <ul>
          {List.renderListItems(list)}
        </ul>
      </div>
    );
  }
}
