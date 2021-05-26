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
import axios from 'axios';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

function getRecipes() {
  const [recipes, setRecipes] = useState([]);
  console.log('load');
  axios
    .get(
      'http://localhost:3000/api/recipes?query=pasta&restrictions[]=dairy+free&restrictions[]=vegan'
    )
    .then((response) => {
      console.log(response.data);
      setRecipes([...recipes, response.data]);
    })
    .catch((error) => {
      console.log(error);
    });
}

function RecipeGenerator() {
  useEffect(() => {
    getRecipes();
  });
  return (
    <>
      <Header />
      <br />
      <Body />
      <Footer />
    </>
  );
}

export default RecipeGenerator;
