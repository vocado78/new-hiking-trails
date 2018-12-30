import React from 'react';
import styles from './styles.css';

import Home from '../Home/Home';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Home />
      </div>
    );
  }
}
