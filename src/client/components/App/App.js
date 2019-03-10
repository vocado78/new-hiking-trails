import React from 'react';
import { Route } from 'react-router-dom';

import styles from './styles.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Results from '../Results/Results';
import TrailDetail from '../TrailDetail/TrailDetail';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/results" component={Results} />
      <Route path="/results/trail-details/:id" component={TrailDetail} />
      <Footer />
    </div>
  );
}
