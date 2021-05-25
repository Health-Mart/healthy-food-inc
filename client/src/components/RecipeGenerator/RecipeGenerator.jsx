import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import Hero from './Hero.jsx';
import Column from './Column.jsx';
import Footer from './Footer.jsx';


function RecipeGenerator() {
  return (
    <>
      <Hero />
      <br />
      <Column />
      <Footer />
    </>
  );
}

export default RecipeGenerator;
