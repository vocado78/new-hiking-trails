import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../shared/components/App/App';
import TrailStore from '../shared/TrailStore/TrailStore';

const initialState = window.__INITIAL_DATA__;
delete window.__INITIAL_DATA__;

const Wrap = () => (
  <Router>
    <TrailStore initialState={initialState}>
      <App />
    </TrailStore>
  </Router>
);

ReactDOM.hydrate(
  <Wrap />,
  document.getElementById('app')
);
