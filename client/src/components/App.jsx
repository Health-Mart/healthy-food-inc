import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import styled from 'styled-components';

const LandingPage = () => {
  return ( <div>LandingPage</div>);
}
const SignUp = () => {
  return ( <div>SignUp</div>);
}
const LogIn = () => {
  return ( <div>LogIn</div>);
}
const MealPlan = () => {
  return ( <div>MealPlan</div>);
}
const Questionnaire = () => {
  return ( <div>Questionnaire</div>);
}
const RecipeGenerator = () => {
  return ( <div>RecipeGenerator</div>);
}
const GroceryStore = () => {
  return ( <div>GroceryStore</div>);
}
const UserProfile = () => {
  return ( <div>UserProfile</div>);
}

const App = () => {
  return (
    <div>Welcome to the future homepage of Health Food Inc.!</div>
  );
}

export default App;
