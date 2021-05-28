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

import Tabs from './Tabs.jsx';
import useUserInfo from '../../context/useUserInfo.jsx';

const Img = styled.img`
  object-fit: none;
`;

const Wrapper = styled.section`
  height: 100vh;
`;

function UserProfile() {
  const { userInfo, updateUserInfo } = useUserInfo();
  useEffect(() => {
    updateUserInfo('Name', 'Jon Doe');
  }, []);
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="columns box is-size-5 is-gapless m-6 pt-6">
          <div className="column media-left is-one-fifth">
            <figure className="image is-1by1">
              <Img className="is-rounded" src="./random_guy.jpeg" alt="Profile" />
            </figure>
            {/* client/dist/random_guy.jpeg
            client/src/components/UserProfile/UserProfile.jsx */}
            <p className="title is-size-3 has-text-success has-text-centered is-capitalized mx-2 py-2">
              {userInfo.Name}
            </p>
          </div>

          <div className="column">
            <Tabs userInfo={userInfo} updateUserInfo={updateUserInfo} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default UserProfile;
