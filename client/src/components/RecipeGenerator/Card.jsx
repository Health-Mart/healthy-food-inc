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

const replacementImages = {
  // 511748: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/tacobellsign-getty-1595024816.jpg?crop=1.00xw:0.817xh;0,0&resize=1200:*',
};

function Card({ item }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  if (item === undefined) {
    return null;
  }
  const { title } = item;
  const image = replacementImages[item.id] ?? item.image;
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
          {/* <span>{item.id}</span> */}
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
