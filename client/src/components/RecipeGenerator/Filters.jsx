/* eslint-disable no-unused-vars */
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
import Dropdown from './Dropdown.jsx';

const StyledSidebarButton = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  display: flexbox;
`;

function Filters() {
  const buttons = [
    { title: 'Time to cook', options: ['less than 10min', 'about 45min', 'more than 45min'] },
    { title: 'Preference', options: ['healthy', 'popular', 'vagon'] }
  ];
  return (
    <>
      <section className="section">
        <div className="container">
          {buttons.map((item, i) => (
            <Dropdown item={item} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Filters;
