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
  background-image: url('https://assets.epicurious.com/photos/54adba6319925f464b3ba00c/4:1/w_1944,h_486,c_limit/41-Onions.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 30%;
  margin: 0;
`;

const Backgroundx = styled.section`
  background-image: url('https://assets.epicurious.com/photos/54adbc0f19925f464b3ba73f/4:1/w_1944,h_486,c_limit/22-FilledPasta.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 30%;
  margin: 0;
`;

const Backgroundy = styled.section`
  background-image: url('https://assets.epicurious.com/photos/5b731134c31eaf1fc1402f11/16:9/w_2560%2Cc_limit/Arugula-with-Italian-Plums-and-Parmesan-recipe%3D08082018.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 30%;
  margin: 0;
`;

function Header({ searchRecipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [bgImage, setBgImage] = useState(0);
  const ENTER_KEY = 13;
  const SEARCH_BUTTON_EDGE = 35;

  const searchFieldStyle = {
    border: '1px #ddd solid',
    display: 'inline-flex',
    justifyContent: 'space-between',
    height: SEARCH_BUTTON_EDGE
  };

  const searchFieldButtonStyle = {
    height: SEARCH_BUTTON_EDGE - 2, // reduces 2px because of top and bottom border
    width: SEARCH_BUTTON_EDGE - 2,
    outline: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    padding: 5,
    boxSizing: 'border-box',
    appearance: 'none',
    border: 'none',
    borderLeft: '1px #ddd solid'
  };

  const searchFieldInputStyle = {
    outline: 'none',
    border: 'none',
    width: '28rem',
    fontSize: 21,
    padding: 10,
    flex: 1,
    color: '#5a5a5a',
    fontWeight: 100,
    height: SEARCH_BUTTON_EDGE - 2
  };

  const SearchIcon = () => {
    const iconEdge = Math.ceil(SEARCH_BUTTON_EDGE * 0.6);
    const searchIconStyle = {
      fill: '#727272'
    };
    return (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width={iconEdge}
        height={iconEdge}
        viewBox="0 0 635 635"
        style={searchIconStyle}
      >
        <g>
          <path
            d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
            c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
            c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
            C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
            c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"
          />
        </g>
      </svg>
    );
  };

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const term = searchTerm;
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const num = getRandomInt(3);
    setBgImage(num);
    searchRecipes(term);
  }

  useEffect(() => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const num = getRandomInt(3);
    setBgImage(num);
  }, []);

  if (bgImage === 0) {
    return (
      <>
        <Background className="section">
          <div className="container">
            <h1 className="title has-text-white">
              <strong>Find a Recipe</strong>
            </h1>
            <div className="search-bar" style={searchFieldStyle}>
              {/* <input
                className="input is-success is-medium is-rounded"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search"
              /> */}
              <input
                className="react-search-field-input"
                style={searchFieldInputStyle}
                onChange={handleChange}
                type="text"
                placeholder="Find a Recipe"
                value={searchTerm}
              />
              <button
                className="react-search-field-button"
                type="button"
                aria-label="search button"
                style={searchFieldButtonStyle}
                onClick={handleSubmit}
              >
                <SearchIcon />
              </button>
              {/* <input onClick={handleSubmit} className="button" type="submit" value="Search" /> */}
            </div>
          </div>
        </Background>
      </>
    );
  }
  if (bgImage === 1) {
    return (
      <>
        <Backgroundx className="section">
          <div className="container">
            <h1 className="title has-text-white">
              <strong>Find a Recipe</strong>
            </h1>
            <div className="search-bar" style={searchFieldStyle}>
              {/* <input
                className="input is-success is-medium is-rounded"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search"
              /> */}
              <input
                className="react-search-field-input"
                style={searchFieldInputStyle}
                onChange={handleChange}
                type="text"
                placeholder="Find a Recipe"
                value={searchTerm}
              />
              <button
                className="react-search-field-button"
                type="button"
                aria-label="search button"
                style={searchFieldButtonStyle}
                onClick={handleSubmit}
              >
                <SearchIcon />
              </button>
              {/* <input onClick={handleSubmit} className="button" type="submit" value="Search" /> */}
            </div>
          </div>
        </Backgroundx>
      </>
    );
  }
  return (
    <>
      <Backgroundy className="section">
        <div className="container">
          <h1 className="title has-text-white">
            <strong>Find a Recipe</strong>
          </h1>
          <div className="search-bar" style={searchFieldStyle}>
            {/* <input
              className="input is-success is-medium is-rounded"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search"
            /> */}
            <input
              className="react-search-field-input"
              style={searchFieldInputStyle}
              onChange={handleChange}
              type="text"
              placeholder="Find a Recipe"
              value={searchTerm}
            />
            <button
              className="react-search-field-button"
              type="button"
              aria-label="search button"
              style={searchFieldButtonStyle}
              onClick={handleSubmit}
            >
              <SearchIcon />
            </button>
            {/* <input onClick={handleSubmit} className="button" type="submit" value="Search" /> */}
          </div>
        </div>
      </Backgroundy>
    </>
  );
}

export default Header;
