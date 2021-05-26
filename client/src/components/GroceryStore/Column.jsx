import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import Form from './Form.jsx';
import Buttons from './Buttons.jsx';
import dummyData from './dummyData.js';
import Category from './Category.jsx';

const StyledSideBar = styled.section`
  position: sticky;
  top: 0px;
`;

const ButtonNav = styled.div`
  color: red;
`;

function sortData(arr) {
  const obj = {};

  arr.forEach((item) => {
    if (!obj[item.categoryName]) {
      obj[item.categoryName] = {};
    }

    if (!obj[item.categoryName][item.subCategoryName]) {
      obj[item.categoryName][item.subCategoryName] = [];
    }
    obj[item.categoryName][item.subCategoryName].push(item);
  });

  return obj;
}

function Column({ mainCategory }) {
  const { produces } = dummyData;
  const [isLoading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const params = {
      mainCategory: 'Produce'
    };

    axios
      .get('/api/grocery-items', { params })
      .then((res) => {
        console.log('API result:', res.data);
        const sortedData = sortData(res.data);
        console.log('sorted data is ', sortedData);
        setCategoryData(sortedData);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cleanString = (key) => {
    const cleanKey = key.toLowerCase().split(' ').join('-');
    console.log(cleanKey);
    return cleanKey;
  }

  return (
    <>
    {isLoading === true ? (
                <div>Loading</div>
              ) : (
      <div className="columns">
        <div className="column is-one-fifth">
          <StyledSideBar className="section">
            <div className="container">
              <ButtonNav>
                <h1 className="title">Browse</h1>
                <br />
                {Object.keys(categoryData).map((key) => (
                  <Buttons category={key} cleanHref={cleanString(key)} />
                ))}
              </ButtonNav>
            </div>
          </StyledSideBar>
        </div>
        <div className="column">
          <section className="section">
            <div className="container">
              {
                Object.keys(categoryData).map((key) => (
                  <Category categoryData={categoryData[key]} category={key} cleanHref={cleanString(key)} />
                ))
              }
            </div>
          </section>
        </div>
      </div>
      )}
    </>
  );
}

export default Column;
