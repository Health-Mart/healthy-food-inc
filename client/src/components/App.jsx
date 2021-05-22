import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const BigFont = styled.div`
  font-size: 17px;
`
const Wrapper = styled(BigFont)`
  color: red;
`
const App = () => {
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
      </div>
    </>
  );
};

export default App;
