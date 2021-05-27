import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubCategory from './SubCategory.jsx';

function Category({ category, categoryData, cleanHref, setCount, count }) {
  return (
    <>
      <h2 className="title is-2" id={cleanHref}>{category}</h2>
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