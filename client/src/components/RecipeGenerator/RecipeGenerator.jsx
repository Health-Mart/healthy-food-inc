import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
<<<<<<< HEAD
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
=======
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";

//import { HealthContext } from '../../context/healthContext.jsx';
>>>>>>> 86f3513 (mealplan v1)

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
