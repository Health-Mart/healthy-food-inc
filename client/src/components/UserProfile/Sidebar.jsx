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

function Sidebar() {
  return (
    <div className="section">
      <div className="container">
        <aside className="menu mx-2 py-2">
          <p className="menu-label is-size-4 is-capitalized">Billie Eilish</p>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
