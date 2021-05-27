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

const CardContent = styled.div`
  padding: 0.5rem;
  height: 8.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTop = styled.div`
`;

const CardProducer = styled.p`
  color: #403e3b;
  opacity: 0.7;
  font-size: 0.8rem;
  &:hover {
    opacity: 1;
    color: #087F8C;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CardTitle = styled.p`
  font-weight: 700;
  color: #403e3b;
  &:hover {
    color: #087F8C;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CardButtom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const PricePer = styled.div`
  order: 1;
  flex-grow: 1;
  flex-shrink: 1;
  padding-right: 0.5em;
  font-size: 0.8em;
  color: #403e3b;
  opacity: 0.;
  font-weight: 600;
`;

const PriceUnit = styled.div`
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: right;
  color: #403e3b;
  font-size: 0.8em;
  font-weight: 600;
`;

const Price = styled.div`
  order: 3;
  font-size: 1.3em;
  margin-left: 0.3em;
  color: #403e3b;
  text-align: right;
`;

function Card(props) {
  const { item } = props;
  const { photoPath, title, price, pricePer, purchaseUnit, producer } = item;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={photoPath} alt={title} loading="lazy" />
          </figure>
        </div>
        <CardContent>
          <CardTop>
            <CardProducer>{producer}</CardProducer>
            <CardTitle>{title}</CardTitle>
          </CardTop>
          <CardButtom>
            <PricePer>{pricePer}</PricePer>
            <PriceUnit>{purchaseUnit}</PriceUnit>
            <Price>{price}</Price>
          </CardButtom>
        </CardContent>
      </div>
    </>
  );
}

export default Card;
