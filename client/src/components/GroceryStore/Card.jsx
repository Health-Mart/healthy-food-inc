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

function Card() {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">Apple</p>
        </div>
      </div>
    </>
  );
}

export default Card;
