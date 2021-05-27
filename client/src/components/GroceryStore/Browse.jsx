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

const StyledSidebarButton = styled.div`
  margin-bottom: 0 !important;
`;

function Browse({ category, cleanHref }) {
  return (
    <li>
      <a href={`#${cleanHref}`}>{category}</a>
    </li>
  );
}

export default Browse;
