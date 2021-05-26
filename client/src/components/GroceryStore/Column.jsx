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

  return (
    <>
      <div className="columns">
        <div className="column is-one-fifth">
          <section className="section">
            <Form />
            <br />
            <div className="container">
              <ul>
                <Buttons />
              </ul>
            </div>
          </section>
        </div>
        <div className="column">
          <section className="section">
            <div className="container">
              {isLoading === true ? (
                <div>Loading</div>
              ) : (
                Object.keys(categoryData).map((key) => (
                  <Category categoryData={categoryData[key]} category={key} />
                ))
              )}
              {/* <Cards> */}
              {/* {produces.map((item, i) => (
                  <Card item={item} key={i} />
                ))} */}
              {/* </Cards> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Column;
