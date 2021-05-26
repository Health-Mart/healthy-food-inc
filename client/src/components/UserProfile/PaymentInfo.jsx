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
import MealCard from '../MealPlan/MealCard.jsx';

function PaymentInfo() {
  const [previousOrder, setPreviousOrder] = useState(['Salad', 'Chicken', 'Salmon']);
  return (
    <div className="ml-4 pl-4">
      <div className="is-size-4 is-right">
        <h1 className="title is-size-4">
          Payment Information
          <button className="button is-small ml-3" type="submit">
            Update
          </button>
        </h1>
      </div>

      <div className="container is-flex is-flex-direction-row">
        <div className="columns is-flex is-flex-direction-column my-0 py-0 px-3">
          <div className="column">
            <div>💳 Chase</div>
            <div>•••• •••• •••• •••• 1234</div>
          </div>
        </div>
      </div>

      <div className="is-size-4 is-left">
        <h1 className="title is-size-4 pt-5">Previous Orders</h1>
        <div className="columns">
          <div className="column is-4 mt-4 is-flex is-flex-direction-row">
            {previousOrder.map((meal, index) => (
              <div className="card m-3 py-1 px-1 ">
                <div className="card-header">
                  <div className="card-header-title is-size-6">{meal}</div>
                </div>

                <div className="card-image">
                  <figure className="image is-1by1">
                    <img
                      src="https://www.heynutritionlady.com/wp-content/uploads/2018/01/winter_vegetable_meal_prep_bowls.jpg"
                      alt="images"
                    />
                  </figure>
                </div>

                <div className="card-content is-size-6">Lorem Ipsum</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
