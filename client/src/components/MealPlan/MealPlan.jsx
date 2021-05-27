import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import axios from 'axios';
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

import TimeSelector from './TimeSelector.jsx';

const Section = styled.section`
  //border: 2px solid yellow;
`;

const Div = styled.div`
  //border: 2px solid purple;
`;

function MealPlan() {
  // const [meals, setMealName] = useState([
  //   ['Pizza', 'Pasta', 'Salad'],
  //   ['Chicken', 'Fish', 'Vegies'],
  //   ['Soup', 'Sandwich', 'Turkey']
  // ]);

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('/api/meals/?count=9')
      .then(result => {
        const data = result.data;
        console.log('/api/meals reslt:', data);
        setMeals(data);
      });
  }, []);


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
                {meals.slice(0, 3).map((meal, index) => (
                  // <span>{meal.title}</span>
                  <MealCard meal={meal.title} key={index} image={meal.photoPath} />
                ))}
              </div>

              <div className="column pt-1 px-4 is-4">
                {meals.slice(3, 6).map((meal, index) => (
                  <MealCard meal={meal.title} key={index} image={meal.photoPath} />
                ))}
              </div>

              <div className="column pt-1 px-4 is-4">
                {meals.slice(6, 9).map((meal, index) => (
                  <MealCard meal={meal.title} key={index} image={meal.photoPath} />
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
