/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
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
import axios from 'axios';
import { HealthContext } from '../../context/healthContext.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

function RecipeGenerator() {
  const { question } = useContext(HealthContext);
  const [survey, setSurvey] = question;
  const [recipes, setRecipes] = useState([]);
  const [dataReady, setdataReady] = useState(false);

  console.log('data from survey: ', survey);

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

  function filter(term) {
    /*
    filter one - time to cook
    1. quick meal
    2. stantard
    3. show cook more
    filter two - preference
    */

    const arr = [];
    recipes.map((item) => {
      console.log(item);
    });

    console.log('filtering...', term);
    // readyInMinutes: '45'
    // tags: 'veryHealthy'

    const params = {
      tag: ['veryHealthy'],
      restrictions: ['dairy free', 'vagan']
    };
    // filter through the recipes
  }

  if (dataReady) {
    return (
      <>
        <Header searchRecipes={searchRecipes} filter={filter} />
        <Body recipes={recipes} />
        <Footer />
        <br />
      </>
    );
  }
  return 'loading...';
}

export default RecipeGenerator;

// git checkout c5f567 -- file1/to/restore file2/to/restore
