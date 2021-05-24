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
import Bulma from 'bulma';

function LandingPage() {
  const dummyImg = [
    'https://images.unsplash.com/photo-1543353071-873f17a7a088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1556908153-c0e609dda194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1615657711994-f0e35eb9e46d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  ];
  const [steps, setSteps] = useState([
    {
      title: 'More Choice, Less Boredom',
      content: 'Pardon me, but would ya mind if I fired me cannon through your porthole?'
    },
    {
      title: 'Quicker Recipes, Less Prep Work',
      content: 'I’d love to drop anchor in your lagoon.'
    },
    {
      title: 'Flexible Plans, Less Hassle',
      content: 'If ye can’t trust a pirate, ye damn well can’t trust a merchant either!'
    }
  ]);

  const TitlesAndContent = () =>
    steps.map((step, index) => (
      <div className="container is-max-desktop" key={index}>
        <h1>Plans Introduction</h1>
        <div>
          <img src={dummyImg[index]} alt="" height="300px" width="300px" />
          <h1>{index + 1}</h1>
          <h1>{step.title}</h1>
          <p>{step.content}</p>
        </div>
      </div>
    ));

  return (
    <div className="container is-max-desktop">
      <Header className="hero is-primary">
        <p className="title">Get Started</p>
      </Header>
      <TitlesAndContent />
    </div>
  );
}

const Header = styled.div`
  background-img: url('https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
  background-color: blue;
`;

export default LandingPage;
