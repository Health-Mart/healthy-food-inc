import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import styled from 'styled-components';
import Questionnaire from './Questionnaire/Questionnaire.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import SignUp from './SignUp/SignUp.jsx';
import LogIn from './LogIn/LogIn.jsx';
import MealPlan from './MealPlan/MealPlan.jsx';
import RecipeGenerator from './RecipeGenerator/RecipeGenerator.jsx';
import GroceryStore from './GroceryStore/GroceryStore.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';


const Nav = () => {
  const divider = " | ";
  return (
    <div>
      <Link to='/'>landing page</Link><span>{divider}</span>
      <Link to='/signup'>sign up</Link><span>{divider}</span>
      <Link to='/login'>log in</Link><span>{divider}</span>
      <Link to='/mealplan'>meal plan</Link><span>{divider}</span>
      <Link to='/questionnaire'>questionnaire</Link><span>{divider}</span>
      <Link to='/recipe-generator'>recipe generator</Link><span>{divider}</span>
      <Link to='/grocery-store'>grocery </Link><span>{divider}</span>
      <Link to='/user-profile'>user profile</Link><span>{divider}</span>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Nav />
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
      <Switch>
        <Route path={['/signup', '/login']}>
          <div>initial page</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
