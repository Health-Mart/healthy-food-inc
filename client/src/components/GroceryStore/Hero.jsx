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
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Primary hero</p>
          <p className="subtitle">Primary subtitle</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
