import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, debug, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import HealthProvider from '../context/healthContext.jsx';

import App from './App.jsx';

it('should do arithmetic', () => {
  expect(2 + 2).toEqual(4);
});

it('renders "Start a plan"', async () => {

  render(
    <Router>
      <HealthProvider>
        <App />
      </HealthProvider>
    </Router>
  );

  // await userEvent.click(category);
  const startAPlan = screen.getByText('Start a plan');
  expect(startAPlan).toBeInTheDocument();

  const getStarted = screen.getByText('Get Started');
  expect(getStarted).toBeInTheDocument();

  expect(screen.queryByText('Who do you shop for?')).not.toBeInTheDocument();
  await userEvent.click(getStarted);
  expect(screen.getByText('Who do you shop for?')).toBeInTheDocument();

  const next = screen.getByText('Next');
  expect(next).toBeInTheDocument();

  const options = [
    'Every day',
    '2 - 3 times a week',
    'Every 1 - 2 weeks',
    'Once a month',
    'Once every few months'
  ];

  await userEvent.click(next);
  options.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
  expect(screen.getByText('How often do you shop for groceries?')).toBeInTheDocument();
});

// it('should have a number for price', async () => {
//   render(
//     <Router>
//       <HealthProvider>
//         <App />
//       </HealthProvider>
//     </Router>
//   );
//   const navMeal = screen.getByText('Meal Plans');
//   expect(navMeal).toBeInTheDocument();

//   userEvent.click(navMeal);
//   // fireEvent.click(navMeal);
//   await waitFor(() => {
//     expect(screen.getByText('May-Jun')).toBeInTheDocument();
//   });
// });
