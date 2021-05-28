import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';
import Modal from './Modal.jsx';

function MealCard({ meal, photo, prepTime, price, serving, details }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const resetModal = () => {
    setIsOpen(false);
  };

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
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  const CardBottom = styled.div`
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


  const Img = styled.img`
    object-fit: contain;
  `;

  const Price = styled.div`
    order: 3;
    font-size: 1.3em;
    margin-left: 0.3em;
    color: #403e3b;
    text-align: right;
  `;

  return (
    <>
      {/* <div className="card my-3 py-1 px-2"> */}
      <div className="card my-5">
        {/* <div className="card-header m-0 p-0">
          <div className="card-header-title is-size-7">{meal}</div>
        </div> */}

        <div className="card-image">
          {/* <figure className="image is-1by1" onClick={() => setIsOpen(true)}> */}
          <figure className="image" onClick={() => setIsOpen(true)}>
            <Img src={photo} alt="image" />
          </figure>
        </div>

        <CardContent className="card-content">
          <CardTitle className="is-size-6">{meal}</CardTitle>
          <CardBottom>
            {/* <span className="has-text-left is-size-6">{prepTime}</span> */}
            <PricePer>{prepTime}</PricePer>
            <Price className="has-text-right is-size-6">{price}</Price>
          </CardBottom>
        </CardContent>
      </div>
      {isOpen ? (
        <Modal
          resetModal={resetModal}
          mealTitle={meal}
          photo={photo}
          prepTime={prepTime}
          price={price}
          serving={serving}
          details={details}
        />
      ) : null}
    </>
  );
}

export default MealCard;
