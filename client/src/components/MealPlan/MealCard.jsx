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
      <div className="card my-3 py-1 px-2">
        <div className="card-header m-0 p-0">
          <div className="card-header-title is-size-7">{meal}</div>
        </div>

        <div className="card-image">
          <figure className="image is-1by1" onClick={() => setIsOpen(true)}>
            <img src={photo} alt="image" />
          </figure>
        </div>

        <div className="card-content is-size-7">
          <span className="has-text-left">{prepTime}</span>
          <span className="has-text-right">{price}</span>
        </div>
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
