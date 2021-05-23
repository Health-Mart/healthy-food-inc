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
import Form from './Form.jsx';
import Buttons from './Buttons.jsx';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin: 2rem;
`;

function Column() {
  return (
    <>
      <div className="columns">
        <div className="column is-one-fifth">
          <section className="section">
            <Form />
            <div className="container">
              <ul>
                <Buttons />
              </ul>
            </div>
          </section>
        </div>
        <div className="column">
          <section className="section">
            <div className="container">
              <Cards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Cards>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Column;
