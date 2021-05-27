import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const Div = styled.div`
  //border: 2px solid black;
`;

function MealCard({ meal }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const resetModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Div className="card my-3 py-1 px-2">
        <Div className="card-header m-0 p-0">
          <div className="card-header-title is-size-6">{meal}</div>
        </Div>

        <Div className="card-image">
          <figure className="image is-1by1" onClick={() => setIsOpen(!isOpen)}>
            <img
              src="https://www.heynutritionlady.com/wp-content/uploads/2018/01/winter_vegetable_meal_prep_bowls.jpg"
              alt="images"
            />
          </figure>
        </Div>

        <Div className="card-content is-size-6">Lorem Ipsum</Div>
      </Div>
      {isOpen ? <Modal resetModal={resetModal} /> : null}
    </>
  );
}

export default MealCard;
