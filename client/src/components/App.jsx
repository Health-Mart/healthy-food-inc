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
const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;
`;

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
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
    console.log(  state);
  };
  console.log('location', location);
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
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Logo>
              <div>
                <Link to="/" className="has-text-white">
                  <strong>Health Food inc.</strong>
                </Link>
              </div>
            </Logo>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <NavItems className="navbar-start has-text-white">
              <a className={`navbar-item ${location.pathname === '/questionnaire' ? 'is-tab is-active' : ''}`}>
                <div>
                  <Link to="/questionnaire" className="has-text-white">Questionnaire</Link>
                </div>
              </a>
              <a className={`navbar-item ${location.pathname === '/recipe-generator' ? 'is-tab is-active' : ''}`}>
                <div>
                  <Link to="/recipe-generator" className="has-text-white">Recipe Generator</Link>
                </div>
              </a>
              <a className={`navbar-item ${location.pathname === '/mealplan' ? 'is-tab is-active' : ''}`}>
                <div>
                  <Link to="/mealplan" className="has-text-white">Meal Plans</Link>
                </div>
              </a>
              <a className={`navbar-item ${location.pathname === '/grocery-store' ? 'is-tab is-active' : ''}`}>
                <div>
                  <Link to="/grocery-store" className="has-text-white">Grocery Market</Link>
                </div>
              </a>
              {/* <a className="navbar-item">
                <div>
                  <Link to="/signup" className="has-text-white">sign up</Link>
                </div>
              </a>
              <a className="navbar-item">
                <div>
                  <Link to="/user-profile" className="has-text-white">User Profile</Link>
                </div>
              </a> */}
            </NavItems>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button type="button" className="button" onClick={() => setShowModal(true)}>
                    Log In
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
    <Switch>
      <Route exact path="/">
        <Navbar />
        <LandingPage />
      </Route>
      <Route path="/signup">
        <Navbar />
        <SignUp />
      </Route>
      <Route path="/login">
        <Navbar />
        <LogIn />
      </Route>
      <Route path="/mealplan">
        <Navbar />
        <MealPlan />
      </Route>
      <Route path="/questionnaire">
        <Navbar />
        <Questionnaire />
      </Route>
      <Route path="/recipe-generator">
        <Navbar />
        <RecipeGenerator />
      </Route>
      <Route path="/grocery-store">
        <GroceryStore />
      </Route>
      <Route path="/user-profile">
        <Navbar />
        <UserProfile />
      </Route>
    </Switch>
    <Switch>
      <Route path={['/signup', '/login']}>
      </Route>
    </Switch>
  </>
);

export default App;
