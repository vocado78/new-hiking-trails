import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './styles.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Results from '../Results/Results';
import TrailDetail from '../TrailDetail/TrailDetail';
import NotFound from '../NotFound/NotFound';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/results/:region" component={Results} />
        <Route path="/results/trail-details/:id" component={TrailDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
