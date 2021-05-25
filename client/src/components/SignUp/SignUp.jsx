import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import 'bulma/css/bulma.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <div className="is-flex is-justify-content-center">
        <div className="login-container ">
          <div className="field">
            <label className="label">Username/Email</label>
            <input className="input" type="text" placeholder="Username" />
          </div>
          <div className="field">
            <label className="label">Password</label>
            <input className="input" type="password" placeholder="Password" />
          </div>
          <div className="field">
            <label className="label">Credit Card</label>
            <input className="input" type="number" placeholder="Credit Card" />
          </div>
          <button
            className="button mt-4 is-fullwidth"
            type="submit"
            onClick={() => console.log('hello')}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
