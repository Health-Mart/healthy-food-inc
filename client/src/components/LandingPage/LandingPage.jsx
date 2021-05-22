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
      content:
        'That’s the finest pirate booty I’ve ever laid eyes on. Not all treasure is silver and gold Now and then we had a hope that if we lived and were good, God would permit us to be pirates. To err is human but to arr is pirate!! Damnation seize my soul if I give you quarters, or take any from you. Shiver me timbers.'
    },
    {
      title: 'Quicker Recipes, Less Prep Work',
      content:
        'Prepare to be boarded. You’re drinking a Salty Dog? How’d you like to try the real thing? Why is the rum gone? Damnation seize my soul if I give you quarters, or take any from you. Pirate’s code: First freedom and the captain. Second the loot, third woman and the rum and at the end no mercy if they not immediately surrender!'
    },
    {
      title: 'Flexible Plans, Less Hassle',
      content:
        'Come on up and see me urchins. Is that a belayin’ pin in yer britches, or are ye …  Always be yourself, unless you can be a pirate. Then always be a pirate. A pirate is a man that is weak to achieve but too strong to steal from even the greatest achiever. Well actualy piracy is a democracy with captains voted for by the crew. Ahoy! lets trouble the water!'
    }
  ]);

  const TitlesAndContent = () =>
    steps.map((step, index) => (
      <div key={index}>
        <img src={dummyImg[index]} height='300px' width='300px' />
        <h3>{step.title}</h3>
        <p>{step.content}</p>
      </div>
    ));

  return (
    <div className="container">
      <div className="notification.decoration1">
        <strong>Get Started</strong>
      </div>
      <TitlesAndContent />
    </div>
  );
}

export default LandingPage;
