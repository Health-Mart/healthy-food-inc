import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

const Img = styled.img`
  object-fit: contain;
`;

function Modal({ resetModal, mealTitle, photo, prepTime, price, serving, details }) {
  const closeModal = () => {
    const element = document.getElementById('modal');
    element.classList.remove('is-active');
  };

  return (
    <div id="modal" className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{mealTitle}</p>
          <button
            onClick={() => {
              closeModal();
              resetModal();
            }}
            className="delete"
            type="submit"
            aria-label="close"
          />
        </header>
        <section className="modal-card-body">
          <figure className="image">
            <Img src={photo} alt="image" />
          </figure>
          <div>
            {details.map((item, index) => {
              const element = item.elementType;
              return (
                <div>
                  <element key={index}>{item.text}</element>
                </div>
              );
            })}
          </div>
        </section>
        <footer className="modal-card-foot">
          <div>{prepTime}</div>
          <div>{price}</div>
          <div>{serving}</div>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
