import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import Hero from './Hero.jsx';
import Column from './Column.jsx';

// import { HealthContext } from '../../context/healthContext.jsx';

function RecipeGenerator() {
  // const { countIncrement } = useContext(HealthContext);
  // const [count, setCount] = countIncrement;
  return (
    <>
      <Hero />
      <br />
      <Column />
    </>
  );
}

export default RecipeGenerator;
