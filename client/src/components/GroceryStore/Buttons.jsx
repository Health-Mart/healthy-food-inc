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

function Buttons() {
  const buttons = [
    'All Products',
    'Produce',
    'Dairy & Eggs',
    'Meat',
    'Prepared Foods',
    'Pantry Essentials',
    'Breads, Rolles & Bakery',
    'Desserts',
    'Seafood',
    'Beverages',
    'Wine, Beer & Spirits'
  ];
  return (
    <>
      <h1 className="title">Browse</h1>
      <br />
      <p className="subtitle">Category</p>
      <br />
      <div className="buttons">
        {buttons.map((item) => (
          <button className="button" type="button">
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
