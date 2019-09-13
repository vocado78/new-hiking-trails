import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import TrailStore from './components/TrailStore/TrailStore';

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
