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

function UserProfile() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns box is-size-5 is-gapless m-6 pt-6">
          <div className="column media-left is-one-fifth">
            <figure className="image is-1by1">
              <img
                className="is-rounded"
                src="https://yt3.ggpht.com/ytc/AAUvwnjyKzvLyxW8YJV6nSRC71JFUikN6ICJn_v-53mz1Q=s900-c-k-c0x00ffffff-no-rj"
                alt="Profile"
              />
            </figure>

            <p className="title is-size-4 has-text-centered is-capitalized mx-2 py-2">
              Billie Eilish
            </p>
          </div>

          <div className="column">
            <Tabs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
