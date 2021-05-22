import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import { HealthContext } from '../../context/healthContext.jsx';

function MealPlan() {
  const { countIncrement } = useContext(HealthContext);
  const [count, setCount] = countIncrement;
  return (
    <div>MealPlan</div>
  )
};

export default MealPlan;