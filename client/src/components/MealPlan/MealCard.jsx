import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';

const Div = styled.div`
  //border: 2px solid black;
`;

function MealCard({ meal }) {
  return (
    <Div className="card my-3 mx-0 py-1 px-1 ">
      <Div className="card-header m-0 p-0">
        <div className="card-header-title">{meal}</div>
      </Div>

      <Div className="card-image">
        <figure className="image is-1by1">
          <img
            src="https://www.heynutritionlady.com/wp-content/uploads/2018/01/winter_vegetable_meal_prep_bowls.jpg"
            alt="images"
          />
        </figure>
      </Div>

      <Div className="card-content">Lorem Ipsum</Div>
    </Div>
  );
}

export default MealCard;

{
  /* <Article className="notification">
      <p className="is-6">{mealName}</p>
      <div className="card-image">
        <figure className="image">
          <img
            src="https://www.heynutritionlady.com/wp-content/uploads/2018/01/winter_vegetable_meal_prep_bowls.jpg"
            alt="images"
          />
        </figure>
      </div>
    </Article> */
}
