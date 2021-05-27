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

function Modal({ resetModal }) {
  const closeModal = () => {
    const element = document.getElementById('modal');
    element.classList.remove('is-active');
  };

  return (
    <div id="modal" className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
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
        <section className="modal-card-body">Test test</section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
}

export default Modal;
