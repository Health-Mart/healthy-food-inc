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

function Form() {
  return (
    <>
      <div className="section">
        <div className="container">
          <input
            className="input is-success is-large is-rounded"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
}

export default Form;
