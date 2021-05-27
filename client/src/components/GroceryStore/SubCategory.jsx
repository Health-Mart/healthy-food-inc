import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 1rem 8rem 1rem 0;
`;

function SubCategory({ subCategory, subCategoryData }) {
  const [cartNumber, setCartNumber] = useState({});
  return (
    <>
      <h3 className="subtitle is-3" id={subCategory}>{subCategory}</h3>
      <Cards>
        {subCategoryData.map((item, i) => (
          <Card item={item} indexKey={i} cartNumber={cartNumber} setCartNumber={setCartNumber} />
        ))}
      </Cards>
    </>
  );
}

export default SubCategory;
