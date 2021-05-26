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

function ContactInfo() {
  return (
    <div className="ml-4 pl-4">
      <div className="is-size-4 title is-right">
        Contact Information
        <button className="button is-small ml-3" type="submit">
          Update
        </button>
      </div>

      <div className="container is-flex is-flex-direction-row">
        <div className="columns is-flex is-flex-direction-column my-2 p-3">
          <div className="column">
            <div>Phone:</div>
          </div>

          <div className="column">
            <div>Address:</div>
          </div>

          <div className="column">
            <div>Email:</div>
          </div>
        </div>

        <div className="columns is-flex is-flex-direction-column my-2 p-3">
          <div className="column">
            <div>+415 123 45 67</div>
          </div>

          <div className="column">
            <div>Lorem ipsum dolor San Francisco, CA 94022</div>
          </div>

          <div className="column">
            <div>billiesh@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
