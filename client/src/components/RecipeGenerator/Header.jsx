/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import Baner from './Baner.jsx';
import Navbar from './Navbar.jsx';

function Header({ searchRecipes, filter }) {
  return (
    <>
      <Baner searchRecipes={searchRecipes} />
      <Navbar filter={filter} />
    </>
  );
}

export default Header;
