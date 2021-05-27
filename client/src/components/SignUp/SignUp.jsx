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

const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1576659185898-ed54d56a55c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
`;

const FactStyle = styled.div`
  border: black 1px;
  opacity: 0.6;
`;

function SignUp() {
  const [count, setCount] = useState(1);
  const [signUp, setSignUp] = useState('');

  const stuff = [
    {
      count: 1,
      items: ['Name', 'Password', 'Username', 'Email']
    },
    {
      count: 2,
      items: ['Address', 'City', 'State', 'Zip Code']
    },
    {
      count: 3,
      items: ['Credit Card', 'Expiration', 'Security Code']
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
    setSignUp(e.target.value);
    console.log(e.target.name);
    console.log(signUp);
  };

  const CreateContent = () =>
    count === 4 ? (
      <div>
        <button onClick={() => setCount(1)}>Reset</button>
      </div>
    ) : (
      stuff.map((bob, index) =>
        bob.count === count
          ? bob.items.map((jim) => (
              <div>
                <div className="is-flex is-justify-content-center">
                  <div className="login-container ">
                    <div className="field">
                      <label className="label">{jim}</label>
                      <input
                        className="input"
                        id={count}
                        type="text"
                        value={signUp}
                        onChange={handleChange}
                        placeholder={jim}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null
      )
    );

  return (
    <>
      <Container>
        <div className="columns section is-medium">
          <FactStyle className="column is-5 is-size-1 box">
            Fun Fact: <br /> {facts[count]}
          </FactStyle>
          <div className="column is-4" />
          <div className="column">
            <CreateContent />
            <div className="mt2">
              <button onClick={() => setCount(count + 1)}>button</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
