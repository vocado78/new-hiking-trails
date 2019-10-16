/* eslint-disable react/prop-types */

import React from 'react';

import styles from './styles.css';
import {
  unSanitize
} from '../../utils/helpers';
import Filter from './Filter/Filter';
import List from './List/List';
import PageTitle from '../PageTitle/PageTitle';
import { TrailContext } from '../../../client/TrailStore/TrailContext';
// import NotFound from '../NotFound/NotFound';


class Results extends React.Component {
  static contextType = TrailContext;

  render() {
    const region = unSanitize(this.context.region);

    // FIX rendering of not found component
    // if (!this.context.trails.length) {
    //   return <NotFound />;
    // }

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

export default Results;
