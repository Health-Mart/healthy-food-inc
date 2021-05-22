import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import styled from 'styled-components';
import Questionnaire from './Questionnaire/Questionnaire.jsx';

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
    <>
      <ul>
        <li> <Link to='/'>landing page</Link> </li>
        <li> <Link to='/signup'>sign up</Link> </li>
        <li> <Link to='/login'>log in</Link> </li>
        <li> <Link to='/mealplan'>meal plan</Link> </li>
        <li> <Link to='/questionnaire'>questionnaire</Link> </li>
        <li> <Link to='/recipe-generator'>recipe generator</Link> </li>
        <li> <Link to='/grocery-store'>grocery store</Link> </li>
        <li> <Link to='/user-profile'>user profile</Link> </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/mealplan">
          <MealPlan />
        </Route>
        <Route path="/questionnaire">
          <Questionnaire />
        </Route>
        <Route path="/recipe-generator">
          <RecipeGenerator />
        </Route>
        <Route path="/grocery-store">
          <GroceryStore />
        </Route>
        <Route path="/user-profile">
          <UserProfile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
