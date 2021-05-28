/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import Card from './Card.jsx';
import { HealthContext } from '../../context/healthContext.jsx';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin: 2rem;
`;

function Body(props) {
  const { recipes } = props;
  // console.log('recipes: ', recipes);
  const { recipeStore } = useContext(HealthContext);
  const [select, setSelect] = useState(false);
  const [recipeMeta, setRecipeMeta] = recipeStore;

  function addRecipe(item) {
    const { id } = item;
    setRecipeMeta((oldRecipeMeta) => ({ ...oldRecipeMeta, [id]: true }));
  }

  function deleteRecipe(item) {
    const { id } = item;
    setRecipeMeta((oldRecipeMeta) => ({ ...oldRecipeMeta, [id]: false }));
  }

  return (
    <>
      <div>
        <div className="column">
          <section className="section">
            <div className="container">
              <Cards>
                {recipes.map((item, i) => (
                  <Card item={item} key={i} addRecipe={addRecipe} deleteRecipe={deleteRecipe} />
                ))}
                <Card />
              </Cards>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Body;
