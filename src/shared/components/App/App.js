import React from 'react';
import { Route } from 'react-router-dom';

import styles from './styles.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Results from '../Results/Results';
import TrailDetail from '../TrailDetail/TrailDetail';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/results/:region" component={Results} />
      <Route path="/results/trail-details/:id" component={TrailDetail} />
      <Footer />
    </div>
  );
}