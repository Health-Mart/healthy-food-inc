import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
  useLocation, useParams
} from "react-router-dom";
import styled from 'styled-components';

const BigFont = styled.div`
  font-size: 17px;
`
const Wrapper = styled(BigFont)`
  color: red;
`
const Bulma = () => {
  let location = useLocation();

  return (
    <>
      <Wrapper>
        <h2 className="green">
          Welcome to the future website of Health Food Inc!

        </h2>
      </Wrapper>
      <h1 className="title">
        Bulma
      </h1>

      <p className="subtitle">
        Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
      </p>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Input" />
        </div>
      </div>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
        <Link to="/dashboard"><button className="button is-warning">Dashboard </button></Link>
      </div>
    </>
  );
};


function App() {
  let location = useLocation();
  let params = useParams();
  return (
    <>
    <Link to="/router"><button className="button is-danger"> Router </button></Link>
    <Link to="/bulma"><button className="button is-success"> Bulma </button></Link>
    <Link to="/dashboard"><button className="button is-warning">Dashboard </button></Link>

    <Switch>
      <Route exact path="/">
        <div> / </div>
      </Route>
      <Route path="/router">
        <div>{JSON.stringify(location)}</div>
        <div>{JSON.stringify(params)}</div>
      </Route>
      <Route path="/dashboard">
        <div>dashboard</div>
      </Route>
      <Route>
        <Bulma />
      </Route>
    </Switch>
    </>
  );
}


export default App;
