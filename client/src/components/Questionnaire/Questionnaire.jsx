import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import { GiFruiting } from 'react-icons/gi';
import { FaBook, FaSignInAlt } from 'react-icons/fa';
import { HealthContext } from '../../context/healthContext.jsx';

const TransitionPage = () => (
  <BigSection className="section has-background-light">
    <Header className="container section has-background-light has-text-weight-bold">
      Welcome to Healthy Food!
      <GiFruiting size={100} />
    </Header>
    <div className="section columns">
      <div className="container column">
        <BigFont className="has-text-black has-text-weight-bold">
          Save up to <span className="has-text-dark has-text-weight-bold">$1000</span> a year!
        </BigFont>
        <div className="level">
          <Underline className="level is-right is-size-2 has-text-dark has-text-weight-bold">
            Membership Benefits
          </Underline>
        </div>
        <div className="columns">
          <p className="column">Guaranteed savings on 6000 + healthy essentials</p>
          <p className="column">Fast, free, carbon-neutral shipping</p>
          <p className="column">Get meals from local farmers</p>
        </div>
      </div>
      <div className="container column">
        <div className="columns">
          <Option className="box has-background-dark-light">
            <h1 className="column is-size-3 has-text-weight-bold">Ready for your recipes?</h1>
            {/* <p>Our recipe generator is curated for your personal tastes</p> */}
            <FaBook size={130} />
            <div className="section" />
            <Link to="/recipe-generator" className="level">
              <button
                type="button"
                className="column level-item button has-background-success has-text-light is-rounded"
              >
                Give me my recipes
              </button>
            </Link>
          </Option>
          <Option className="box has-background-dark-light">
            <h1 className="column is-size-3 has-text-weight-bold">Want to sign up?</h1>
            <br />
            <br />
            <FaSignInAlt size={130} />
            <div className="section" />
            <Link to="/signup" className="level">
              <button
                type="button"
                className="column level-item button has-background-success has-text-light is-rounded"
              >
                Sign me up
              </button>
            </Link>
          </Option>
        </div>
      </div>
    </div>
  </BigSection>
);

function Questionnarie() {
  const [step, setStep] = useState(1);
  const { question } = useContext(HealthContext);
  const [survey, setSurvey] = question;
  const options = [
    {
      title: 'Who do you shop for?',
      step: 1,
      option: [
        'Myself',
        'Spouse or partner',
        'Kids',
        'Babies',
        'Extended Family',
        'Pets',
        'All of these'
      ]
    },
    {
      title: 'How often do you shop for groceries?',
      step: 2,
      option: [
        'Every day',
        '2 - 3 times a week',
        'Every 1 - 2 weeks',
        'Once a month',
        'Once every few months'
      ]
    },
    {
      title: 'How long would you like to spend cooking your food?',
      step: 3,
      option: ['15 minutes', '30 minutes', '45 minutes', '1 hour', "I don't want to cook"]
    },
    {
      title: 'What diets are you interested in?',
      step: 4,
      option: [
        'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto-Vegetarian',
        'Ovo-Vegetarian',
        'Vegan',
        'Pescetarian',
        'Paleo',
        'Primal',
        'Whole30'
      ]
    }
  ];

  const [colorChange, setColorChange] = useState(false);
  const textChange = colorChange
    ? 'title button is-medium is-dark has-text-info is-rounded'
    : 'title button is-medium is-warning has-text-light is-rounded';
  const handleClick = (value) => {
    setSurvey((oldSurvey) => [...oldSurvey, value]);
    // setColorChange(!colorChange);
  };

  const RenderItems = () =>
    step === 5 ? (
      <TransitionPage />
    ) : (
      options.map((option, i) =>
        option.step === step ? (
          <section className="section full-height-background">
            <progress className="progress is-danger" value={step} max={4} />
            <Container className="container card">
              <Section className="columns section" key={i}>
                <Div className="section column" />
                <Div className="section column columns is-multiline">
                  <Title className="title is-1 column">{option.title}</Title>
                  {option.option.map((items, j) => (
                    <Div className="column">
                      <p
                        className={
                          survey.includes(items)
                            ? 'title button is-medium is-dark has-text-white is-rounded'
                            : 'title button is-medium is-warning has-text-info is-rounded'
                        }
                        onClick={() => handleClick(items)}
                        aria-hidden="true"
                      >
                        {items}
                      </p>
                    </Div>
                  ))}
                </Div>
              </Section>
              <div className="level">
                <Button
                  className="button is-info is-rounded is-focused is-large"
                  type="button"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </Button>
              </div>
            </Container>
          </section>
        ) : null
      )
    );
  return <RenderItems />;
}

const BigFont = styled.p`
  font-size: 3rem;
  padding-right: 2rem;
`;

const Underline = styled.p`
  border-bottom: 2px solid #095256;
`;

const BigSection = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  font-size: 3rem;
  text-align: center;
`;

const Section = styled.div`
  margin: 0;
  height: 400px;
`;

const Button = styled.button`
  padding: 2rem;
  position: right;
`;

const Container = styled.div`
  background-image: url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1231&q=80');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Div = styled.div`
  padding: 0;
  margin: 0.5rem;
`;

const Title = styled.div`
  width: 100% !important;
  text-align: left;
  font-size: 3em;
  font-weight: bold;
  color: #087f8c;
  overflow-wrap: break-word;
`;

const Option = styled.div`
  margin: 1rem;
  width: 400px;
  border: 3px solid #e39774;
  border-radius: 25px;
  box-shadow: 3px 5px 4px #e39774;
`;

export default Questionnarie;
