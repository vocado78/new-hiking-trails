import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../../../routes';
import styles from './styles.css';

export default function App() {
  return (
    <div className={styles.app}>
      {renderRoutes(routes)}
    </div>
  );
}

// <Navbar />
// <Footer />
