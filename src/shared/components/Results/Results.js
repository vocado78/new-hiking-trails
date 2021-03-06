import React, { Component } from 'react';

import styles from './styles.css';
import { sanitize } from '../../utils/helpers';
import Filter from './Filter/Filter';
import List from './List/List';
import PageTitle from '../PageTitle/PageTitle';
import TrailContext from '../../TrailStore/TrailContext';
// import NotFound from '../NotFound/NotFound';


export default class Results extends Component {
  static contextType = TrailContext;

  render() {
    const region = sanitize(this.context.region);

    // FIX rendering of not found component if no trails found

    return (
      <div className={styles.results}>
        <PageTitle title={`In ${region}`} page="Results" />
        <div className={styles.container}>
          <Filter />
          <List />
        </div>
      </div>
    );
  }
}
