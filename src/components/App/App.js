import React from 'react';
import styles from './styles.css';

import Home from '../Home/Home';

export default class App extends React.Component {
    render() {
      return (
          <div className={styles.app}>
            <Home />
          </div>
      );
    }
}