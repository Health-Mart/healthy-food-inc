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
import * as FaIcons from 'react-icons/fa';
import MealCard from '../MealPlan/MealCard.jsx';

function PaymentInfo() {
  const [previousOrder, setPreviousOrder] = useState(['Salad', 'Chicken', 'Salmon']);
  return (
    <div className="ml-4 pl-4">
      <div className="is-size-4 is-right">
        <h1 className="title is-size-4">
          Payment Information
          <button className="button is-rounded is-small ml-3" type="submit">
            Update
          </button>
        </h1>
      </div>

      <div className="container is-flex is-flex-direction-row">
        <div className="columns is-flex is-flex-direction-column my-0 py-0 px-3">
          <div className="column">
            <div>
              <span className="is-6">
                <FaIcons.FaRegCreditCard />
              </span>
              <span className="pl-2 is-size-5">Chase</span>
            </div>
            <div>•••• •••• •••• •••• 1234</div>
          </div>
        </div>
      </div>

      <div className="is-size-4 is-left">
        <h1 className="title is-size-4">Previous Orders</h1>
        <div className="columns px-4">
          <div className="column is-4 is-flex is-flex-direction-row">
            {previousOrder.map((meal, index) => (
              <MealCard className="is-size-1" meal={meal} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
