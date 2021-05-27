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

function Navbar({ mainCategory, setMainCategory }) {
  return (
    <>
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <div>
              <strong>FARMER MARKET</strong>
            </div>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className={'navbar-item ' + (mainCategory === 'Produce' ? 'is-tab is-active' : '')} id="Produce" onClick={(e) => setMainCategory(e.target.id)}>
              Produce
            </a>

            <a className={'navbar-item ' + (mainCategory === 'Dairy' ? 'is-tab is-active' : '')} id="Dairy" onClick={(e) => setMainCategory(e.target.id)}>
              Dairy
            </a>

            <a className={'navbar-item' + (mainCategory === 'Dairy' ? 'is-tab is-active' : '')} id="Dairy" onClick={(e) => setMainCategory(e.target.id)}>
              Dairy
            </a>

            <a className={'navbar-item' + (mainCategory === 'Dairy' ? 'is-tab is-active' : '')} id="Dairy" onClick={(e) => setMainCategory(e.target.id)}>
              Dairy
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Meet Farmers</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Stories</a>
                <a className="navbar-item">Learn More</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light">Shopping Bag</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
