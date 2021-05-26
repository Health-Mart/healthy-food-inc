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

function Card(props) {
  const { item } = props;
  const { photoPath, title, price, pricePer, purchaseUnit } = item;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={photoPath} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{title}</p>
          <div className="columns">
            <div className="column is-4">
              <p className="subtitle is-7">{pricePer}</p>
            </div>
            <div className="column is-4">
              <p className="subtitle is-7">{purchaseUnit}</p>
            </div>
            <div className="column is-4">
              <p className="subtitle is-5">{price}</p>
            </div>
            <div className="column is-4" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Card;
