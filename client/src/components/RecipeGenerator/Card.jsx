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
import Modal from './Modal.jsx';

function Card({ item }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  if (item === undefined) {
    return null;
  }
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
          <p className="title is-5">{title}</p>
          <p className="title is-7" />
        </div>
        <button onClick={openModal} className="button is-small" type="button">
          Learn More
        </button>
        <Modal
          item={item}
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
      </div>
    </>
  );
}

export default Card;
