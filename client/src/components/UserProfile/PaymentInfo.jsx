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

const CardContent = styled.div`
  padding: 1rem;
  height: 8.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.p`
  font-weight: 700;
  color: #403e3b;
  &:hover {
    color: #087f8c;
    cursor: pointer;
  }
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Img = styled.img`
  object-fit: contain;
`;


function PaymentInfo() {
  const [previousOrder, setPreviousOrder] = useState([
    {
      photoPath:
        'https://goodeggs4.imgix.net/edf0d614-4c87-4d1e-bd4d-1866f3af55cc.jpg?w=380&h=238&fm=jpg&auto=compress&fit=crop',
      prepTime: '25 min total',
      price: '36.99',
      purchaseUnit: '3 servings',
      subCategoryName: 'Dairy-Free',
      title: 'Pork Ramen with Spinach & Mushrooms'
    },

    {
      photoPath:
        'https://goodeggs4.imgix.net/c2470fe2-bb40-4f1e-93f6-8681eaaea4c4.jpg?w=380&h=238&fm=jpg&auto=compress&fit=crop',
      prepTime: '15 min total',
      price: '27.99',
      purchaseUnit: '3 servings',
      subCategoryName: 'Vegetarian',
      title: 'Peach Panzanella with Burrata & Mint'
    }
  ]);

  return (
    <div className="ml-4 pl-4">
      <div className="is-size-4 is-right">
        <h1 className="title is-size-3 has-text-success">
          Payment Information
          <button className="button is-rounded is-success is-small ml-3" type="submit">
            Update
          </button>
        </h1>
      </div>

      <div className="container is-flex is-flex-direction-row">
        <div className="columns is-flex is-flex-direction-column my-0 py-0 px-3">
          <div className="column">
            <div>
              <span className="is-5">
                <FaIcons.FaRegCreditCard />
              </span>
              <span className="pl-2 is-size-5">Chase</span>
            </div>
            <div>•••• •••• •••• •••• 1234</div>
          </div>
        </div>
      </div>

      <div className="is-size-4 is-left">
        <h1 className="title is-size-4 has-text-success">Previous Orders</h1>
        <div className="columns pr-4">
          <div className="column p-2 is-flex is-flex-direction-row">
            {previousOrder.map((item, i) => (
              <>
                <div className="card px-2">
                  <div className="card-image">
                    <figure className="image">
                      <Img src={item.photoPath} alt="image" />
                    </figure>
                  </div>
                  <CardContent className="card-content">
                    <CardTitle className="is-size-6">{item.title}</CardTitle>
                    <CardBottom>
                      <div className="is-size-5">{item.subCategoryName}</div>
                    </CardBottom>
                  </CardContent>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
