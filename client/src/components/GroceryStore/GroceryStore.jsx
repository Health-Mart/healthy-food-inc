import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation, useParams
} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Column from './Column.jsx';
import Footer from './Footer.jsx';

function GroceryStore() {
  return(
    <>
      <Navbar />
      <Column />
      <Footer />
    </>
  );
}

export default GroceryStore;
