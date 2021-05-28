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
import Category from './Category.jsx';
import Browse from './Browse.jsx';

const StyledSideBar = styled.section`
  position: sticky;
  top: 0px;
  padding: 3rem 0rem 3rem 1rem;
`;

const ButtonNav = styled.div`
  ul {
    font-weight: 500;
  }
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

function Column({ mainCategory, setCount, count }) {
  const [isLoading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const params = {
      mainCategory
    };

    axios
      .get('/api/grocery-items', { params })
      .then((res) => {
        const sortedData = sortData(res.data);
        setCategoryData(sortedData);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [mainCategory]);

  const cleanString = (key) => {
    const cleanKey = key.toLowerCase().split(' ').join('-');
    return cleanKey;
  };

  return (
    <>
      {isLoading === true ? (
        <div> </div>
      ) : (
        <div className="columns has-background-white">
          <div className="column is-one-fifth">
            <StyledSideBar className="section">
              <div className="container">
                <ButtonNav>
                  <h1 className="title">Browse</h1>
                  <aside className="menu">
                    <ul className="menu-list">
                      {Object.keys(categoryData).map((key) => (
                        <Browse category={key} cleanHref={cleanString(key)} />
                      ))}
                    </ul>
                  </aside>
                </ButtonNav>
              </div>
            </StyledSideBar>
          </div>
          <div className="column">
            <section className="section">
              <div className="container">
                {Object.keys(categoryData).map((key) => (
                  <Category
                    categoryData={categoryData[key]}
                    category={key}
                    cleanHref={cleanString(key)}
                    count={count}
                    setCount={setCount}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Column;
