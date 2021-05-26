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
import Sidebar from './Sidebar.jsx';


const Section = styled.section`
  //border: 2px solid yellow;
`;
const Container = styled.div`
  //border: 2px solid red;
`;

const Div = styled.div`
  //border: 2px solid purple;
`;

const Img = styled.img`
 //border: 2px solid purple;
  //box-sizin: border-box;
`;

function UserProfile() {
  return (
    <Section className="section">
      <Container className="container">
        <Div className="columns box is-size-5 is-gapless m-6 pt-6">
          <Div className="column media-left is-one-fifth">
            <figure className="image is-1by1">
              <Img
                className="is-rounded"
                src="https://yt3.ggpht.com/ytc/AAUvwnjyKzvLyxW8YJV6nSRC71JFUikN6ICJn_v-53mz1Q=s900-c-k-c0x00ffffff-no-rj"
                alt="Image"
              />
            </figure>

            <Sidebar />
          </Div>

          <Div className="column">
            <Tabs />
          </Div>
        </Div>
      </Container>
    </Section>
  );
}

export default UserProfile;
