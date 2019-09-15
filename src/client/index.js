import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import TrailStore from './components/TrailStore/TrailStore';

// const initialData = window.__INITIAL_DATA__;

// console.log('im initial data from client/index.js', initialData);

const Wrap = () => (
  <Router>
    <TrailStore>
      <App />
    </TrailStore>
  </Router>
);

ReactDOM.hydrate(
  <Wrap />,
  document.getElementById('app')
);
