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

const Background = styled.section`
  background-image: url('https://assets.epicurious.com/photos/54adba6319925f464b3ba00c/4:1/w_1944,h_486,c_limit/41-Onions.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  object-fit: fill;
  height: 30%;
  background-size: auto;
  margin: 0 !important;
  padding: 0 !important;
`;

function MealPlan() {
  const [meals, setMeals] = useState();
  const [isLoading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(0);

  const getMealPlans = () => {
    axios
      .get('api/meals')
      .then((res) => {
        setMeals(res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMealPlans();
  }, []);

  const searchMeals = (searchKeyword) => {
    const params = {
      title: searchKeyword
    };
    console.log(params);
    axios
      .get('/api/meals', { params })
      .then((response) => {
        setMeals(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log('meals are: ', meals);
  return (
    <>
      {isLoading === true ? (
        <div>Loading</div>
      ) : (
        <>
          <section className="section m-3 p-3">
            <div className="container mx-3 px-3">
              <div className="container mx-6 px-6">
                <div className="container mx-0 px-0">
                  <h1 className="title is-size-2 my-4 px-6 has-text-success">Meal Plans</h1>
                  <TimeSelector selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} />
                  <SearchMeal searchMeals={searchMeals} />

                  <div className="columns is-centered is-align-items-center my-6 px-6">
                    {[0, 3, 6].map((n, i) => (
                      <div className="column pt-1 px-4 is-4">
                        {meals
                          .slice(n + selectedWeek * 9, n + 3 + selectedWeek * 9)
                          .map((meal, index) => (
                            <MealCard
                              meal={meal.title}
                              key={index}
                              photo={meal.photoPath}
                              prepTime={meal.prepTime}
                              price={meal.price}
                              serving={meal.purchaseUnit}
                              details={meal.details.productDetails}
                            />
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default MealPlan;
