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

function Card(props) {
  const { item } = props;
  const { image, title } = item;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="profile" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
