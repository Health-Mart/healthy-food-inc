import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import App from './components/App.jsx';
import HealthProvider from './context/healthContext.jsx';

require('./mystyles.scss');

ReactDOM.render(
  <Router>
    <HealthProvider>
      <App />
    </HealthProvider>
  </Router>,
  document.querySelector('#app')
);
