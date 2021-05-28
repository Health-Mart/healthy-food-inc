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

const Strong = styled.strong`
  font-weight: 300;
  line-height: 1.4;
  font-size: 1rem;
`;

const Span = styled.span`
  font-weight: 300;
  line-height: 1.4;
  font-size: 1rem;
`;

const CardButtom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
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
              console.log(details);
              const element = item.elementType;
              return (
                <p>
                  {element === 'strong' ? <Strong key={index}>{item.text}</Strong> : <br />}
                  {element === 'span' ? <Span key={index}>{item.text}</Span> : <br />}
                </p>
              );
            })}
          </div>
        </section>
        <footer className="modal-card-foot">
          <CardButtom>
            <div className="has-text-right">{serving}</div>
          </CardButtom>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
