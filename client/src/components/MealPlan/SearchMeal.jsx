import React, { useState, useEffect, useContext } from 'react';
// import bulma from 'bulma';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

function SearchMeal({ searchMeals }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMeals(searchKeyword);
  };



  return (
    <div className="field is-grouped my-6 px-6">
      <p className="control is-expanded">
        <input
          className="input is-rounded"
          type="text"
          placeholder="Search ingredients"
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
        />
      </p>
      <p className="control">
        <input
          className="button is-info is-rounded"
          type="submit"
          value="Search"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </p>
    </div>
  );
}

export default SearchMeal;
