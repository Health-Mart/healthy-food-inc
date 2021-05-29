import React, { useState, useEffect, useContext } from 'react';
// import bulma from 'bulma';
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





function TimeSelector({ selectedWeek, setSelectedWeek }) {
  const weeks = [
    ['May-Jun', '29-04'],
    ['Jun', '05-11'],
    ['Jun', '12-18'],
    ['Jun', '19-25'],
    ['Jun', '26-02']
  ];

  return (
    <nav className="pagination my-2 px-6" role="navigation" aria-label="pagination">
      <ul className="pagination-list is-size-6">
        {weeks.map((item, i) => (
          <li>
            <TableLink
              className={`pagination-link ${i === selectedWeek ? ' is-current' : ''}`}
              onClick={() => {
                setSelectedWeek(i);
              }}
            >
              <div>{item[0]}</div>
              <div>{item[1]}</div>
            </TableLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TimeSelector;
