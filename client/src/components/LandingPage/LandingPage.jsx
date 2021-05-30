import React, { useState } from 'react';
import { GiFarmer } from 'react-icons/gi';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import Bulma from 'bulma';
import useUserInfo from '../../context/useUserInfo.jsx';

function LandingPage() {
  const dummyImg = [
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWx0aCUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1556911073-52527ac43761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1615657711994-f0e35eb9e46d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  ];
  const farmerPics = [
    'https://images.unsplash.com/photo-1593011951342-8426e949371f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1944&q=80',
    'https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80',
    'https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80'
  ];
  const farmerData = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`
  ];

  const [steps, setSteps] = useState([
    {
      title: 'Take Our Questionnaire',
      content: 'Let us know your dietary preferences and we will take care the rest!'
    },
    {
      title: 'Find a Recipe Right for You',
      content: 'Thousands of recipes are waiting for you. From Gluten Free Dinner Rolls to Skillet Enchilada Dinner, we got them all.'
    },
    {
      title: 'Make a Plan and Have It Delivered',
      content: 'We will deliver the freshest and healthiest meals to your frontdoor! Save you time and stress.'
    }
  ]);
  const { updateUserInfo, userInfo } = useUserInfo();

  const TitlesAndContent = () =>
    steps.map((step, index) => (
      <div className="columns even-height">
        <CardContent className="column card" key={index}>
          <div className="card-image">
            <figure className="image is-3x4">
              <img src={dummyImg[index]} alt="" />
            </figure>
          </div>
          <div className="card-content">
            <CardText className="is-size-6 has-text-black has-text-weight-bold">
              {step.title}
            </CardText>
            <p className="has-text-black">{step.content}</p>
          </div>
        </CardContent>
      </div>
    ));

  return (
    <div>
      <Header className="box container is-fullhd section is-medium">
        <div className="hero-body">
          <div className="is-size-3 has-text-success has-text-weight-bold">Start A Plan</div>
          <div className="is-size-2 has-text-success has-text-weight-bold">Change Your Life</div>
          <Link to="/questionnaire">
            <button
              type="button"
              className="button is-success has-text-white is-size-4 has-text-weight-bold is-rounded"
            >
              Get Started
            </button>
          </Link>
        </div>
      </Header>
      <div>
        <h1 className="title level-item is-size-1 ">How It Works</h1>
      </div>
      <section className="container is-max-desktop level">
        <div className="columns is-desktop is-vcentered section">
          <TitlesAndContent />
        </div>
      </section>
      <FarmerInfo className="columns box">
        <div className="column is-one-quarter">
          <div className="columns">
            <h1 className="column is-size-3 has-text-warning has-text-weight-bold">
              Meet the Farmer
            <p className="has-text-light">Shawn Valdez</p>
            </h1>
            <GiFarmer reverse size={100} className="column has-text-warning" />
          </div>
          <br />
          <div className="">
            <p className="has-text-light container is-size-6">{farmerData[0]}</p>
          </div>
        </div>
        <FarmerPicture className="column" />
      </FarmerInfo>
    </div>
  );
}

const Header = styled.section`
  background-image: url('https://images.unsplash.com/photo-1543353071-873f17a7a088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80');
  background-repeat: no-repeat;
  background-position: right bottom;
  margin: 0;
  max-width: 9999px !important;
`;

const FarmerPicture = styled(Header)`
  background-image: url('https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80') !important;
  background-position: center;
  background-size: cover;
  padding: 0;
  max-width: 9999px !important;
`;

const FarmerInfo = styled.section`
  background-color: #095256;
  padding: 0;
  height: 480px;
  margin: 0;
`;

const CardText = styled.p`
  text-align: center;
  padding: 0.5rem;
  margin-top: -12px;
`;

const CardContent = styled.div`
  background-color: #d4afb9;
  padding: 0;
  margin: 2rem;
  margin-bottom: 12px !important;
  height: 372px !important;
  /* margin: -12px -12px 12px !important; */
`;

export default LandingPage;
