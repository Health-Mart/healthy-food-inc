import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
require('./mystyles.scss');
import HealthProvider from './context/healthContext.jsx';

ReactDOM.render(
  <Router>
    <HealthProvider>
      <App />
    </HealthProvider>
  </Router>,
  document.querySelector('#app')
);
