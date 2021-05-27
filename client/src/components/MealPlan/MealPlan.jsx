import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import axios from 'axios';
import MealCard from './MealCard.jsx';
import SearchMeal from './SearchMeal.jsx';

import TimeSelector from './TimeSelector.jsx';

const Section = styled.section`
  //border: 2px solid yellow;
`;

const Div = styled.div`
  //border: 2px solid purple;
`;

function MealPlan() {
  const [meals, setMealName] = useState([
    ['Pizza', 'Pasta', 'Salad'],
    ['Chicken', 'Fish', 'Vegies'],
    ['Soup', 'Sandwich', 'Turkey']
  ]);

  const getMealPlans = () => {
    axios
      .get('api/mealplans')
      .then((res) => {
        console.log('API results ', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMealPlans();
  });

  return (
    <Section className="section m-3 p-3">
      <Div className="container mx-3 px-3">
        <Div className="container mx-6 px-6">
          <Div className="container mx-0 px-0">
            <h1 className="title is-size-2 my-4 px-6">Meal Plans</h1>
            <TimeSelector />
            <SearchMeal />

            <div className="columns is-centered is-align-items-center my-6 px-6">
              <div className="column pt-1 px-4 is-4">
                {meals[0].map((meal, index) => (
                  <MealCard meal={meal} key={index} />
                ))}
              </div>

              <div className="column pt-1 px-4 is-4">
                {meals[1].map((meal, index) => (
                  <MealCard meal={meal} key={index} />
                ))}
              </div>

              <div className="column pt-1 px-4 is-4">
                {meals[2].map((meal, index) => (
                  <MealCard meal={meal} key={index} />
                ))}
              </div>
            </div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
}

export default MealPlan;
