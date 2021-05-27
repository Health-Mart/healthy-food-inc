import React, { useState, useEffect, useContext } from 'react';
import bulma from 'bulma';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';

const TableLink = styled.a`
  display: table;
`;

function TimeSelector() {


  return (
    <nav className="pagination my-2 px-6" role="navigation" aria-label="pagination">
      <ul className="pagination-list is-size-6">
        <li>
          <TableLink className="pagination-link is-current" aria-label="Goto page 1">
            <div>May-Jun</div>
            <div>29-04</div>
          </TableLink>
        </li>

        <li>
          <TableLink className="pagination-link" aria-label="Goto page 45">
            <div>Jun</div>
            <div>05-11</div>
          </TableLink>
        </li>
        <li>
          <TableLink className="pagination-link" aria-label="Page 46" aria-current="page">
            <div>Jun</div>
            <div>12-18</div>
          </TableLink>
        </li>
        <li>
          <TableLink className="pagination-link" aria-label="Goto page 47">
            <div>Jun</div>
            <div>19-25</div>
          </TableLink>
        </li>

        <li>
          <TableLink className="pagination-link" aria-label="Goto page 86">
            <div>Jun-July</div>
            <div>26-02</div>
          </TableLink>
        </li>
      </ul>
    </nav>
  );
}

export default TimeSelector;
