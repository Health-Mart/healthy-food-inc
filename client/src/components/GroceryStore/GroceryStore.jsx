import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar.jsx';
import Column from './Column.jsx';
import Footer from './Footer.jsx';

function GroceryStore() {
  const [mainCategory, setMainCategory] = useState('Produce');
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar setMainCategory={setMainCategory} mainCategory={mainCategory} count={count} />
      <Column mainCategory={mainCategory} count={count} setCount={setCount} />
      <Footer />
    </>
  );
}

export default GroceryStore;
