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

  return (
    <>
      <Div className="card my-3 py-1 px-2">
        <Div className="card-header m-0 p-0">
          <div className="card-header-title is-size-7">{meal}</div>
        </Div>

        <Div className="card-image">
          <figure className="image is-1by1" onClick={() => setIsOpen(true)}>
            <Img src={photo} alt="image" />
          </figure>
        </Div>

        <Div className="card-content is-size-7">
          <span className="has-text-left">{prepTime}</span>
          <span className="has-text-right">{price}</span>
        </Div>
      </Div>
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
