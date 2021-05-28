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
    `Come on up and see me urchins. Me I’m Dishonest. And A Dishonest Man You Can Always Trust To Be Dishonest. Honestly Its The Honest Ones You Want To Watch Out For Because You Never Know When They Are Going To Do Something Completely Stupid! Why are pirates pirates? cuz they arrrrrr you know, thats the 2nd time I’v watched that man sail away with my ship.`
  ];

  const [steps, setSteps] = useState([
    {
      title: 'More Choice, Less Boredom',
      content: 'Pardon me, but would ya mind if I fired me cannon through your porthole?'
    },
    {
      title: 'Quicker Recipes, Less Prep Work',
      content: 'I’d love to drop anchor in your lagoon.'
    },
    {
      title: 'Flexible Plans, Less Hassle',
      content: 'If ye can’t trust a pirate, ye damn well can’t trust a merchant either!'
    }
  ]);
  const { updateUserInfo, userInfo } = useUserInfo();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === farmerPics.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? farmerPics.length - 1 : current - 1);
  };

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
    <>
      <Header className="box container is-fullhd section is-medium">
        <div className="hero-body">
          <div className="is-size-3 has-text-success has-text-weight-bold">Start a plan</div>
          <div className="is-size-2 has-text-success has-text-weight-bold">Change your life</div>
          <Link to="/questionnaire">
            <button type="button" className="button is-primary">
              Get Started
            </button>
          </Link>
        </div>
      </Header>
      <div className="container section level">
        <h1 className="title level-item is-size-1 ">How it works</h1>
      </div>
      <Content className="container is-max-desktop level">
        <div className="columns is-desktop is-vcentered section">
          <TitlesAndContent />
        </div>
      </Content>
      {/* <Bullshit className="container section is-large">
        <p className="is-size-1 has-text-black has-text-weight-bold">Our purpose is to create a happy healthy life style.</p>
      </Bullshit> */}
      <FarmerInfo className="columns box">
        <div className="column">
          <div className="columns">
            <h1 className="column is-size-3 has-text-warning has-text-weight-bold">
              Meet the <span className="is-size-2">farmers</span>
            </h1>
            <GiFarmer reverse size={100} className="column has-text-warning" />
          </div>
          <br />
          <div className="">
            <p className="has-text-light container is-size-6">{farmerData[0]}</p>
            <br />
            <p className="has-text-light container">Want to know more about ( ??? )</p>
            <br />
            <button type="button" className="button is-decoration1 is-rounded">
              Click for more
            </button>
          </div>
        </div>
        <FaChevronLeft className="left-arrow" onClick={prevSlide} />
        {farmerPics.map((image, index) => {
          console.log(image);
          return <div key={index}>{index === current && <FarmerPicture src={image} alt="" />}</div>;
        })}
        <FaChevronRight className="right-arrow" onClick={nextSlide} />
      </FarmerInfo>
      {/* <div>
        <button className="button is-primary" type="button" onClick={() => {
          updateUserInfo('name', 'jon')
          updateUserInfo('email', 'fake@gmail.com')
        }}>test</button>
        <div className="has-text is-size-1">{userInfo.name}</div>
        <button className="button is-warning" type="button" onClick={() => console.log(userInfo)}>Console</button>
      </div> */}
    </>
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
  background-position: center;
  background-size: 100%;
  max-width: 9999px !important;
`;

const Bullshit = styled.section`
  background-image: url('https://images.unsplash.com/photo-1556911073-a517e752729c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
  background-position: center;
  background-repeat: no-repeat;
`;

const FarmerInfo = styled.section`
  background-color: #095256;
  padding: 0;
  margin: 0;
`;

const Content = styled.section`
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
