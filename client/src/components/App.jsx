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
        <h2>
          Welcome to the future website of Health Food Inc!

        </h2>
      </Wrapper>
      {/* <section class="section">
        <div class="container">
          <h1 class="title">
            Hello World
          </h1>
          <p class="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
     </section> */}
    </>
  );
};

export default App;
