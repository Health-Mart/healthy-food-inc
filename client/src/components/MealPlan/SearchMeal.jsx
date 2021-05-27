import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

function SearchMeal() {
  //const [searchedKeyword]
  return (
    <div className="field is-grouped my-6 px-6">
      <p className="control is-expanded">
        <input className="input is-rounded" type="text" placeholder="What do you want to eat?" />
      </p>
      <p className="control">
        <a className="button is-info">Search</a>
      </p>
    </div>
  );
}

export default SearchMeal;
