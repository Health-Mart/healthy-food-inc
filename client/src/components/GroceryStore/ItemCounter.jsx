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

function ItemCounter({ cartNumber, indexKey }) {
  return cartNumber[indexKey] === undefined ? (
    <div>No count</div>
  ) : (
    <div>{cartNumber[indexKey]}</div>
  );
}

export default ItemCounter;
