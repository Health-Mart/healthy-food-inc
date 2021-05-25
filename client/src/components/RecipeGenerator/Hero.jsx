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

function Hero() {
  return (
    <>
      <section className="hero is-success is-medium">
        <div className="hero-body">
          <div className="container">
            <input
              className="input is-success is-large is-rounded"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li>
                  <a>Ingrediants</a>
                </li>
                <li>
                  <a>Nutrients</a>
                </li>
                <li>
                  <a>Cuisine</a>
                </li>
                <li>
                  <a>Taste</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Hero;