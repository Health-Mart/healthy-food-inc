import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";

import { HealthContext } from '../../context/healthContext.jsx';

function RecipeGenerator() {
  const { countIncrement } = useContext(HealthContext);
  const [count, setCount] = countIncrement;
  return (
    <div>RecipeGenerator</div>
  )
};

export default RecipeGenerator;