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
      <div className="columns">
        <input className="input is-small" type="text" placeholder="Text input" />
      </div>
    </>
  );
}

export default Form;
