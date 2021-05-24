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
      <section className="hero">
        <figure className="image">
          <img
            src="https://www.michigan.org/sites/default/files/styles/15_6_desktop/public/farm.markets.jpg?itok=zcMJpZom&timestamp=1525119203"
            alt="background"
          />
        </figure>
      </section>
    </>
  );
}

export default Hero;
