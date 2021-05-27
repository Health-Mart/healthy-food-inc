/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import Card from './Card.jsx';
// import dummyData from './dummyData.js';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin: 2rem;
`;

function Body(props) {
  const { recipes } = props;
  console.log('recipes: ', recipes);
  return (
    <>
      <div>
        <div className="column">
          <section className="section">
            <div className="container">
              <Cards>
                {recipes.map((item, i) => (
                  <Card item={item} key={i} />
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
