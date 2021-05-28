/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
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

function Navbar({ filter }) {
  return (
    <>
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <a className="navbar-item">
            <div>
              <strong>Filters</strong>
            </div>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Time to Cook</a>
              <div className="navbar-dropdown">
                <a
                  onClick={() => {
                    filter(20);
                  }}
                  className="navbar-item is-success"
                >
                  quick meal
                </a>
                <a
                  onClick={() => {
                    filter(30);
                  }}
                  className="navbar-item"
                >
                  standard
                </a>
                <a
                  onClick={() => {
                    filter(50);
                  }}
                  className="navbar-item"
                >
                  slow cook
                </a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Preference</a>
              <div className="navbar-dropdown">
                <a
                  onClick={() => {
                    filter('tags: veryPopular');
                  }}
                  className="navbar-item"
                >
                  popular
                </a>
                <a
                  onClick={() => {
                    filter('tags: veryHealthy');
                  }}
                  className="navbar-item"
                >
                  healthy
                </a>
                <a
                  onClick={() => {
                    filter('tags: sustainable');
                  }}
                  className="navbar-item"
                >
                  sustainable
                </a>
                <a
                  onClick={() => {
                    filter('tags: cheap');
                  }}
                  className="navbar-item"
                >
                  cheap
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
