import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';

const Wrap = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

ReactDOM.hydrate(
  <Wrap />,
  document.getElementById('app')
);
