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
import ContactInfo from './ContactInfo.jsx';
import PaymentInfo from './PaymentInfo.jsx';

function Tabs({ userInfo, updateUserInfo }) {
  const [selectedTab, setSelectedTab] = useState('My Profile');

  let tab;
  if (selectedTab === 'My Profile') {
    tab = <ContactInfo userInfo={userInfo} updateUserInfo={updateUserInfo} />;
  }

  if (selectedTab === 'Subscription') {
    tab = <PaymentInfo userInfo={userInfo} updateUserInfo={updateUserInfo} />;
  }

  return (
    <div>
      <div className="tabs is-large">
        <ul>
          <li>
            <a onClick={() => setSelectedTab('My Profile')}>My Profile</a>
          </li>
          <li>
            <a onClick={() => setSelectedTab('Subscription')}>Subscription</a>
          </li>
        </ul>
      </div>
      {tab}
    </div>
  );
}

export default Tabs;
