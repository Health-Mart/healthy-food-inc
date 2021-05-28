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

import useUserInfo from '../context/useUserInfo.jsx';

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
  background: #f0ffff;
  border-radius: 6px;
  height: 600px;
  width: 550px;
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
    console.log(state);
  };
  console.log('location', location);

  const { userInfo } = useUserInfo();

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
                <div className="is-flex is-justify-content-center">
                  <img
                    width="365px"
                    height="237px"
                    src="https://lh3.googleusercontent.com/gn9gZjIQ3m8Xm5ROR3AvwF3XcIqFplg7Sd3EV7di7Jwb813yXpWgErIr2-R9p5RpIxPV1PVsU9tY_Awnu0a_uJmfgU-EPk8u34JKjSsw"
                    alt="alternatetext"
                  />
                </div>
                <div className="field">
                  <label className="label pt-5">Username</label>
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
                  <div className="control has-icons-left has-icons-right mb-6">
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
                <div className="is-flex is-justify-content-center">
                  <button
                    className="button is-success has-text-white is-size-5 has-text-weight-bold is-rounded"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Sign In
                  </button>
                </div>
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
                  <strong>Healthy Food Inc</strong>
                </Link>
              </div>
            </Logo>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <NavItems className="navbar-start has-text-white">
              <a
                className={`navbar-item ${
                  location.pathname === '/questionnaire' ? 'is-tab is-active' : ''
                }`}
              >
                <div>
                  <Link to="/questionnaire" className="has-text-white">
                    Questionnaire
                  </Link>
                </div>
              </a>
              <a
                className={`navbar-item ${
                  location.pathname === '/recipe-generator' ? 'is-tab is-active' : ''
                }`}
              >
                <div>
                  <Link to="/recipe-generator" className="has-text-white">
                    Recipe Generator
                  </Link>
                </div>
              </a>
              <a
                className={`navbar-item ${
                  location.pathname === '/mealplan' ? 'is-tab is-active' : ''
                }`}
              >
                <div>
                  <Link to="/mealplan" className="has-text-white">
                    Meal Plans
                  </Link>
                </div>
              </a>
              <a
                className={`navbar-item ${
                  location.pathname === '/grocery-store' ? 'is-tab is-active' : ''
                }`}
              >
                <div>
                  <Link to="/grocery-store" className="has-text-white">
                    Grocery Market
                  </Link>
                </div>
              </a>
            </NavItems>

            <div className="navbar-end">
              <div className="navbar-item">
                {Boolean(userInfo.Name)
                  ? (<button type="button" className="button">
                      <Link to="/user-profile" className="is-primary" style={{'color': 'black'}}>My Account</Link>
                    </button> )
                  : (<button type="button" className="button" onClick={() => setShowModal(true)}>
                    Log In
                  </button>)
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

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
      <Route path={['/signup', '/login']} />
    </Switch>
  </>
);

export default App;
