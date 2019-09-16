import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../shared/components/App/App';
import TrailStore from './TrailStore/TrailStore';

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
