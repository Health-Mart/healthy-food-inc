import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubCategory from './SubCategory.jsx';

const CategoryTitle = styled.h2`
  margin-top: 1em;
`;
function Category({ category, categoryData, cleanHref, setCount, count }) {
  return (
    <>
      <CategoryTitle className="title is-2" id={cleanHref}>{category}</CategoryTitle>
      {
        Object.keys(categoryData).map((key) => {
          return (
            <SubCategory subCategoryData={categoryData[key]} subCategory={key} setCount={setCount} count={count} />
          )
        })
      }
    </>
  );
}

export default Category;