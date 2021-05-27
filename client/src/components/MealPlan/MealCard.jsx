import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';

const Div = styled.div`
  //border: 2px solid black;
`;

function MealCard({ meal, image }) {
  return (
    <Div className="card my-3 mx-0 py-1 px-1 ">
      <Div className="card-header m-0 p-0">
        <div className="card-header-title">{meal}</div>
      </Div>

      <Div className="card-image">
        <figure className="image is-1by1">
          <img
            src={image}
            alt="images"
          />
        </figure>
      </Div>

      <Div className="card-content">Lorem Ipsum</Div>
    </Div>
  );
}

export default MealCard;
