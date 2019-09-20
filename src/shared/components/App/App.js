import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './styles.css';
// import Navbar from '../Navbar/Navbar';
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
      <Switch>
        <Route exact path="/ssr" component={Home} />
        <Route exact path="/ssr/about" component={About} />
        <Route exact path="/ssr/contact" component={Contact} />
        <Route exact path="/ssr/results/:region" component={Results} />
        <Route exact path="/ssr/results/trail-details/:id" component={TrailDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
