import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
// import { HealthContext } from '../../context/healthContext.jsx';
import Navbar from './Navbar.jsx';
import Column from './Column.jsx';
import Footer from './Footer.jsx';

function GroceryStore() {
  // const { countIncrement } = useContext(HealthContext);
  // const [count, setCount] = countIncrement;
  const [mainCategory, setMainCategory] = useState('Produce');

  return (
    <>
      <Navbar setMainCategory={mainCategory, setMainCategory} />
      <Column mainCategory={ mainCategory }/>
      <Footer />
    </>
  );
}

export default GroceryStore;
