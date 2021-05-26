import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubCategory from './SubCategory.jsx';

function Category({ category, categoryData }) {
  return (
    <>
      <h2 className="title is-2">{category}</h2>
      {
        Object.keys(categoryData).map((key) => {
          return (
            <SubCategory subCategoryData={categoryData[key]} subCategory={key} />
          )
        })
      }
    </>
  );
}

export default Category;