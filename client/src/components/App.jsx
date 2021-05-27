/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import Questionnaire from './Questionnaire/Questionnaire.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import SignUp from './SignUp/SignUp.jsx';
import LogIn from './LogIn/LogIn.jsx';
import MealPlan from './MealPlan/MealPlan.jsx';
import RecipeGenerator from './RecipeGenerator/RecipeGenerator.jsx';
import GroceryStore from './GroceryStore/GroceryStore.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';

import 'bulma/css/bulma.min.css';

const CustomModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  padding: 4rem;
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const CustomModalLogin = styled.div`
  background: white;
  border-radius: 6px;
  height: 300px;
  width: 250px;
  margin-top: 7rem;
  padding: 2rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  border: none;
  outline: none;
  background: none;
`;

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      {showModal ? (
        <CustomModal className="is-flex is-justify-content-center">
          <CustomModalLogin>
            <CloseButton className="close-button" onClick={() => setShowModal(false)}>
              <RiCloseFill />
            </CloseButton>
            <form onSubmit={handleSubmit}>
              <div className="login-container">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={state.username}
                      onChange={handleInputChange}
                    />
                    <span className="icon is-small is-left">
                      <FaUserAlt />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={state.password}
                      onChange={handleInputChange}
                    />
                    <span className="icon is-small is-left">
                      <FaLock />
                    </span>
                  </div>
                </div>
                <button className="button mt-4 " type="submit" onClick={() => setShowModal(false)}>
                  Sign In
                </button>
              </div>
            </form>
          </CustomModalLogin>
        </CustomModal>
      ) : null}
      <div>
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <div>
                <Link to="/">
                  <strong>Health Food inc.</strong>
                </Link>
              </div>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {/* <a className="navbar-item">
                <div>
                  <Link to="/questionnaire">questionnaire</Link>
                </div>
              </a> */}
              <a className="navbar-item">
                <div>
                  <Link to="/recipe-generator">Recipes</Link>
                </div>
              </a>
              <a className="navbar-item">
                <div>
                  <Link to="/mealplan">Meal Plan</Link>
                </div>
              </a>
              <a className="navbar-item">
                <div>
                  <Link to="/grocery-store">Grocery </Link>
                </div>
              </a>
              <a className="navbar-item">
                <div>
                  <Link to="/signup">sign up</Link>
                </div>
              </a>
              <a className="navbar-item">
                <div>
                  <Link to="/user-profile">user profile</Link>
                </div>
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button type="button" className="button" onClick={() => setShowModal(true)}>
                    log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// const Nav = () => {
//   const divider = ' | ';
//   return (
//     <div>
//       <Link to="/">landing page</Link>
//       <span>{divider}</span>
//       <Link to="/signup">sign up</Link>
//       <span>{divider}</span>
//       <Link to="/login">log in</Link>
//       <span>{divider}</span>
//       <Link to="/mealplan">meal plan</Link>
//       <span>{divider}</span>
//       <Link to="/questionnaire">questionnaire</Link>
//       <span>{divider}</span>
//       <Link to="/recipe-generator">recipe generator</Link>
//       <span>{divider}</span>
//       <Link to="/grocery-store">grocery </Link>
//       <span>{divider}</span>
//       <Link to="/user-profile">user profile</Link>
//       <span>{divider}</span>
//     </div>
//   );
// };

const App = () => (
  <>
    <Navbar />
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

export default App;
