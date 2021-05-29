import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

const Count = styled.span`
  font-weight: 800;
  padding-left: 3px;
`;

function Navbar({ mainCategory, setMainCategory, count }) {
  return (
    <>
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <div>
              <strong>GROCERY MARKET</strong>
            </div>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a
              className={`navbar-item ${mainCategory === 'Produce' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Produce')}
            >
              Produce
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Dairy' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Dairy')}
            >
              Dairy
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Meat & Fish' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Meat & Fish')}
            >
              Meat & Fish
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Alcohol' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Alcohol')}
            >
              Alcohol
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Prepared' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Prepared')}
            >
              Prepared
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Snacks' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Snacks')}
            >
              Snacks
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Drinks' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Drinks')}
            >
              Drinks
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Pantry' ? 'is-tab is-active' : ''}`}
              onClick={() => setMainCategory('Pantry')}
            >
              Pantry
            </a>
            <a
              className={`navbar-item ${mainCategory === 'Health & Home' ? 'is-tab is-active' : ''
                }`}
              onClick={() => setMainCategory('Health & Home')}
            >
              Health & Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <Link to="/mealplan" className="has-text-black">Meal Plan</Link>
                </a>
                <a className="navbar-item">
                  <Link to="/recipe-generator" className="has-text-black">Recipe Generator</Link>
                </a>
                <a className="navbar-item">
                  <Link to="/questionnaire" className="has-text-black">Questionnaire</Link>
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light">Shopping Bag <Count>({count})</Count></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
