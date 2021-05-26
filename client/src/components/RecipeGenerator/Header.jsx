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

const Background = styled.section`
  background-image: url('https://assets.epicurious.com/photos/5b731134c31eaf1fc1402f11/16:9/w_2560%2Cc_limit/Arugula-with-Italian-Plums-and-Parmesan-recipe%3D08082018.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 30%;
  margin: 0;
`;

function Header({ searchRecipes }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const term = searchTerm;
    searchRecipes(term);
  }

  return (
    <>
      <Background className="section">
        <div className="container">
          <h1 className="title">Find a recipe</h1>
          <form>
            <input
              className="input is-success is-medium is-rounded"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search"
            />
            <input onClick={handleSubmit} className="button" type="submit" value="Search" />
          </form>
        </div>
      </Background>
    </>
  );
}

export default Header;

// https://assets.epicurious.com/photos/5b731134c31eaf1fc1402f11/16:9/w_2560%2Cc_limit/Arugula-with-Italian-Plums-and-Parmesan-recipe%3D08082018.jpg
