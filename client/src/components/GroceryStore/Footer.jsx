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

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Farmer Market</strong> by Healthy Food inc.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
