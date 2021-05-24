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
            <img
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg"
              alt="profile"
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-6">Recipe</p>
          <p className="title is-5">Tuscan Chicken Skillet</p>
          <p className="title is-7">
            Bacon, cream, Parmesan -- is your mouth watering yet? There's no need to go out to
            dinner when you can make this restaurant-style creamy, cheesy chicken and fettuccine at
            home.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
