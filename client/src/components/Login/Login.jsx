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

const CustomModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  padding: 4rem;
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const CustomModalLogin = styled.div`
  background: white;
  border-radius: 6px;
  height: 300px;
  width: 250px;
  margin-top: 7rem;
  padding: 2rem;
  position: relative;
`;

const CloseButton = styled.button`
  color: grey;
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
`;

function Login() {
  const [showModal, setShowModal] = useState(false);

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      {showModal ? (
        <CustomModal className="is-flex is-justify-content-center">
          <CustomModalLogin>
            <CloseButton className="close-button" onClick={() => setShowModal(false)} />
            <form onSubmit={handleSubmit}>
              <div className="login-container">
                <div className="field">
                  <label className="label">Username</label>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={state.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button className="button mt-4">Sign In</button>
              </div>
            </form>
          </CustomModalLogin>
        </CustomModal>
      ) : null}
      <div>
        <button className="button mt-4" onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      </div>
    </div>
  );
}

export default Login;
