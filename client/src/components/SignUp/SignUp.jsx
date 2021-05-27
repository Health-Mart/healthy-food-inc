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

const CreateContent = ({ count, params, signUp, handleChange }) =>
  count === 4 ? (
    <div>
      <button onClick={() => setCount(1)}>Reset</button>
    </div>
  ) : (
    params.map((paramGroup, index) =>
      paramGroup.count === count
        ? paramGroup.items.map((paramItem) => (
            <div>
              <div className="is-flex is-justify-content-left">
                <div className="login-container ">
                  <div className="field">
                    <label className="label">{paramItem}</label>
                    <input
                      className="input"
                      type="text"
                      name={paramItem}
                      value={signUp[paramItem]}
                      /* onChange={(max) => console.log(max)} */
                      onChange={handleChange}
                      placeholder={paramItem}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        : null
    )
  );

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
`;

const FactStyle = styled.div`
  border: black 1px;
  opacity: 0.65;
`;

function SignUp() {
  const [count, setCount] = useState(1);
  const [signUp, setSignUp] = useState({
    Name: '',
    Password: '',
    Username: '',
    Email: '',
    Address: '',
    City: '',
    State: '',
    ZipCode: '',
    CreditCard: '',
    Expiration: '',
    SecurityCode: ''
  });

  const params = [
    {
      count: 1,
      items: ['Name', 'Password', 'Username', 'Email']
    },
    {
      count: 2,
      items: ['Address', 'City', 'State', 'ZipCode']
    },
    {
      count: 3,
      items: ['CreditCard', 'Expiration', 'SecurityCode']
    }
  ];

  const facts = [
    '',
    'The first oranges weren’t orange.',
    'A cow-bison hybrid is called a “beefalo”.',
    'Johnny Appleseed’s fruits weren’t for eating.',
    '90% of clients who sign up gain 6 packs.'
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSignUp((oldstate) => ({ ...oldstate, [e.target.name]: e.target.value }));
    /* console.log('e.target.value', e.target.value); */
    /* console.log('e.target.name', e.target.name); */
    /* console.log(signUp); */
  };

  return (
    <>
      <Container>
        <div className="columns section is-medium">
          <FactStyle className="column is-5 is-size-1 box">
            Fun Fact: <br /> {facts[count]}
          </FactStyle>
          <div className="column is-4" />
          <div className="column">
            <CreateContent
              count={count}
              params={params}
              signUp={signUp}
              handleChange={handleChange}
            />
            <br />
            <div className="mt2">
              <button
                className=" button is-flex is-justify-content-center margin-top-5"
                onClick={() => setCount(count + 1)}
              >
                button
              </button>
            </div>
          </div>
        </div>
      </Container>
      <br />
    </>
  );
}

export default SignUp;
