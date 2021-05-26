import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin: 2rem;
`;

function SubCategory({ subCategory, subCategoryData }) {
  return (
    <>
      <h3 className="subtitle is-3">{subCategory}</h3>
      <Cards>
        {subCategoryData.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </Cards>
    </>
  );
}

export default SubCategory;
