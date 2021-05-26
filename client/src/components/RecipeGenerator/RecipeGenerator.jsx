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

function RecipeGenerator() {
  const [recipes, setRecipes] = useState([]);
  const [dataReady, setdataReady] = useState(false);
  const paramas = {
    query: 'pasta',
    tag: ['veryHealthy'],
    restrictions: ['dairy free', 'vagan']
  };

  function GetRecipes() {
    axios
      .get('/api/recipes', { paramas })
      .then((response) => {
        setRecipes(response.data);
        setdataReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    GetRecipes();
  }, []);

  function searchRecipes(term) {
    const params = {
      query: term
    };
    axios
      .get('/api/recipes', { params })
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (dataReady) {
    return (
      <>
        <Header searchRecipes={searchRecipes} />
        <br />
        <Body recipes={recipes} />
        <Footer />
      </>
    );
  }
  return 'loading...';
}

export default RecipeGenerator;
