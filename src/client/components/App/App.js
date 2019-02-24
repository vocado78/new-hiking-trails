import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../../../routes';
import styles from './styles.css';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';

export default function App() {
  return (
    <div className={styles.app}>
      {renderRoutes(routes)}
    </div>
  );
}

// <Navbar />
// <Footer />
