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

function ContactInfo({ userInfo, updateUserInfo }) {
  const {
    Name,
    Password,
    Username,
    Email,
    Address,
    City,
    State,
    ZipCode,
    CreditCard,
    Expiration,
    SecurityCode
  } = userInfo;

  useEffect(() => {
    updateUserInfo('Username', 'JonDoe');
    updateUserInfo('Email', 'jondoe@gmail.com');
    updateUserInfo('Address', 'JLorem ipsum dolor San Francisco, CA 94022');
    updateUserInfo('City', 'San Francisco, CA 94022');
    updateUserInfo('State', 'CA');
    updateUserInfo('ZipCode', '94022');
  }, []);

  return (
    <div className="ml-4 pl-4">
      <div className="is-size-4 title is-right">
        Contact Information
        <button className="button is-small ml-3 is-rounded is-success" type="submit">
          Update
        </button>
      </div>

      <div className="container is-flex is-flex-direction-row">
        <div className="columns is-flex is-flex-direction-column my-2 px-2">
          <div className="column is-success">
            <div>Username:</div>
          </div>

          <div className="column is-success">
            <div>Phone:</div>
          </div>

          <div className="column is-success">
            <div>Address:</div>
          </div>

          <div className="column is-success">
            <div>Email:</div>
          </div>
        </div>

        <div className="columns is-flex is-flex-direction-column my-2 px-2">
          <div className="column">
            <div>{userInfo.Username}</div>
          </div>

          <div className="column">
            <div>+415 123 45 67</div>
          </div>

          <div className="column">
            <div>Lorem ipsum dolor San Francisco, CA 94022</div>
          </div>

          <div className="column">
            <div>{userInfo.Email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
