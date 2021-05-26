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

const Modal = ({ showModal, setShowModal, openModal, item }) => {
  const { image, title, summary } = item;

  return (
    <>
      {showModal ? (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={image} alt="profile" />
              </figure>
            </div>
            <div className="modal-card-body">
              <p className="title is-4">{title}</p>
              <p className="title is-5">Ingredients</p>
              <p className="title is-7">12 ounces fettuccine</p>
              <p className="title is-7">4 slices bacon, chopped</p>
              <p className="title is-7">1 pound chicken tenders, cut into 1-inch pieces</p>
              <p className="title is-7">2 cloves garlic, minced</p>
              <p className="title is-7">4 plum tomatoes, chopped</p>
              <p className="title is-7">1 cup heavy cream</p>
              <p className="title is-7">5 ounces baby spinach</p>
              <p className="title is-7">3/4 cup grated Parmesan</p>
              <p className="title is-7">3 tablespoons chopped fresh basil</p>
            </div>
            <div className="modal-card-foot">
              <button className="button is-success" type="button">
                Select
              </button>
              <button className="button" type="button">
                Cancel
              </button>
            </div>
          </div>
          <button
            onClick={openModal}
            type="button"
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
