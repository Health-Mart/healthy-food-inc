import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function SubCategory({ subCategory, subCategoryData }) {
  console.log('here is subCat', subCategory, subCategoryData);
  return (
    <h3><b>{subCategory}</b></h3>

  );
}

export default SubCategory;