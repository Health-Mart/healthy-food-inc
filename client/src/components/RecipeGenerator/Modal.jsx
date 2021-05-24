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

function Modal() {
  return (
    <>
      <div class="modal">
        <div class="modal-background"></div>
          <div class="modal-content">
          </div>
         <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </>
  );
}

export default Modal;
