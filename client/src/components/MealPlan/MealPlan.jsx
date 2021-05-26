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
import MealCard from './MealCard.jsx';
import SearchMeal from './SearchMeal.jsx';

const Section = styled.section`
  //border: 2px solid yellow;
`;

const Div = styled.div`
  //border: 2px solid purple;
`;

function MealPlan() {
  const [meals, setMealName] = useState(['pizza', 'pasta', 'salad']);
  
  return (
    <Section className="section m-6 p-6">
      <Div className="container mx-3 px-3">
        <Div className="container mx-6 px-6">
          <Div className="container mx-3 px-3">
            <h1 className="title is-size-2 my-4 px-6">Meal Plans</h1>
            <SearchMeal />

            <div className="columns is-centered is-align-items-center my-6 px-6">
              <div className="column pt-1 px-4 is-4">
                {meals.map((meal, index) => (
                  <MealCard meal={meal} key={index} />
                ))}
              </div>

              <div className="column pt-1 px-4 is-4">
                {meals.map((meal, index) => (
                  <MealCard meal={meal} key={index} />
                ))}
              </div>

              <div className="column pt-1 px-4 is-4">
                {meals.map((meal, index) => (
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
