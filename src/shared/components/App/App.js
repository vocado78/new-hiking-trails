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
import config from '../../../../config';
import TrailStore from '../../../client/TrailStore/TrailStore';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];


export default function App() {
  return (
    <div className={styles.app}>
      <TrailStore>
        <Switch>
          <Route exact path={homePath} component={Home} />
          <Route exact path={`${homePath}/about`} component={About} />
          <Route exact path={`${homePath}/contact`} component={Contact} />
          <Route exact path={`${homePath}/results/:region`} component={Results} />
          <Route exact path={`${homePath}/results/trail-details/:id`} component={TrailDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </TrailStore>
    </div>
  );
}
