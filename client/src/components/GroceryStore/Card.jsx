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
import ItemCounter from './ItemCounter.jsx';

const CardContent = styled.div`
  padding: 1rem;
  height: 8.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTop = styled.div``;

const CardProducer = styled.p`
  color: #403e3b;
  opacity: 0.7;
  font-size: 0.8rem;
  &:hover {
    opacity: 1;
    color: #087f8c;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CardTitle = styled.p`
  font-weight: 700;
  color: #403e3b;
  &:hover {
    color: #087f8c;
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
  opacity: 0.7;
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

const AddToCart = styled.button`
  &:hover {
    background-color: white;
    color: #e29db0;
  }
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #e29db0;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  z-index: 5;
`;

const RemoveFromCart = styled(AddToCart)`
  &:hover {
    background-color: white;
    color: #e29db0;
  }
  position: absolute;
  left: 0.5rem;
  bottom: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #e29db0;
  border: none;
  color: white;
  font-size: 1.5rem;
  z-index: 5;
`;

const StyledItemCounter = styled.h1`
  visibility: ${props => props.itemCounter > 0 ?
    'normal' : 'hidden'};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #403e3b;
  opacity: 40%;
  color: white;
  z-index: 3;
  font-size: 8rem;
  font-weight: 700;
  text-align: center;
  justify-self: center;
`;

const StyledAddedToCart = styled.h4`
  visibility: ${(props) => (props.itemCounter > 0 ? 'normal' : 'hidden')};
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
  text-align: center;
  justify-self: center;
  bottom: 0.75rem;
  color: white;
  opacity: 40%;
  font-size: 1.25rem;
  font-weight: bold;
  z-index: 5;
`;


function Card({ item, indexKey, cartNumber, setCartNumber, count, setCount }) {
  const { photoPath, title, price, pricePer, purchaseUnit, producer } = item;
  const [itemAdded, setItemAdded] = useState('+');
  const [itemCounter, setItemCounter] = useState(0);

  // const [isAdded, setIsAdded] = useState(false);
  // const onAddCartHandler = () => {
  //   cartNumber[indexKey] === undefined
  //       ? (cartNumber[indexKey] = 1)
  //       : (cartNumber[indexKey] = cartNumber[indexKey] + 1);
  //   setCartNumber(cartNumber);
  //   console.log('hey cartNum is this: ', cartNumber);
  // }

  const onRemoveCartHandler = () => {
    if (itemCounter === 1) {
      setCount(count - 1);
    }
    setItemCounter(itemCounter - 1);
  };

  // const onAddHandler = () => {
  //   if(isAdded) {
  //     setItemAdded('???');
  //   } else {
  //     setItemAdded('+');
  //   }
  // }

  const toggle = () => {
    // if (itemAdded === '+') {
      // setItemAdded('???');
      if (itemCounter === 0) {
        setCount(count + 1);
      }
      setItemCounter(itemCounter + 1);
    // } else {
    //   setItemAdded('+');
    //   setCount(count - 1);
    //   setItemCounter(itemCounter - 1);
    // }
  }

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={photoPath} alt={title} loading="lazy" />
            {itemCounter > 0 ? <RemoveFromCart onClick={() => onRemoveCartHandler()}>-</RemoveFromCart> : <div></div>}
            <StyledItemCounter itemCounter={itemCounter}>{itemCounter}</StyledItemCounter>
            <StyledAddedToCart itemCounter={itemCounter}>ITEMS ADDED</StyledAddedToCart>
            <AddToCart onClick={() => toggle()}> {itemAdded} </AddToCart>
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
