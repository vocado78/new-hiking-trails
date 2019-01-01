import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import styles from './styles.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </Router>
    );
  }
}
