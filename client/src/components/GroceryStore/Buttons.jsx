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

function Buttons({ category, cleanHref }) {
  console.log('clean Href from buttons is', cleanHref);
  return (
    <>
      <StyledSidebarButton className="buttons">
        {/* {buttons.map((item) => ( */}
          <button className="button" type="button">
            <a href={`#${cleanHref}`}>
            {category}
            </a>
          </button>
        {/* ))} */}
      </StyledSidebarButton>
    </>
  );
}

export default Buttons;
