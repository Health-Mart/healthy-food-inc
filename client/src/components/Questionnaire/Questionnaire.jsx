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
import { HealthContext } from '../../context/healthContext.jsx';

const TransitionPage = () => (
  <BigSection className="section has-background-light">
    <Header className="container section has-background-light has-text-weight-bold">
      Welcome to Healthy Food!
      <GiFruiting size={200} />
    </Header>
    <div className="section columns">
      <div className="container column">
        <BigFont className="has-text-black has-text-weight-bold">
          Save up to <span className="has-text-dark has-text-weight-bold">$1000</span> a year!
        </BigFont>
        <div className="section" />
        <p className="is-size-2 has-text-black">
          Try us <span className="has-text-info has-text-weight-bold">risk free</span> for 30 days
          and <span className="has-text-info has-text-weight-bold">start saving</span>
        </p>
      </div>
      <div className="container column">
        <Option className="box columns section has-background-dark-light">
          <h1 className="column is-size-1">Ready for your recipes?</h1>
          <p>Our recipe generator is curated for your personal tastes</p>
          <Link to="/recipe-generator">
            <button type="button" className="column">
              Give me my recipes
            </button>
          </Link>
        </Option>
        <Option className="box columns section has-background-dark-light">
          <h1 className="column">Want to sign up? Our members get...</h1>
          <p>Guaranteed savings on 6000 + healthy essentials</p>
          <p>Fast, free, carbon-neutral shipping</p>
          <p>Get meals from local farmers</p>
          <Link to="/signup">
            <button type="button" className="column">
              Sign me up
            </button>
          </Link>
        </Option>
      </div>
    </div>
  </BigSection>
);

function Questionnarie() {
  const [step, setStep] = useState(5);
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

  const handleClick = (value) => setSurvey((oldSurvey) => [...oldSurvey, value]);

  const RenderItems = () =>
    step === 5 ? (
      <TransitionPage />
    ) : (
      options.map((option, i) =>
        option.step === step ? (
          <BigSection className="section">
            <progress className="progress is-danger" value={step} max={4} />
            <Container className="container card">
              <Section className="columns section is-medium" key={i}>
                <Div className="section column" />
                <Div className="section column columns is-multiline">
                  <Title className="title is-1 column">{option.title}</Title>
                  {option.option.map((items, j) => (
                    <Div className="column">
                      <p
                        className="title button is-medium is-warning has-text-info is-rounded"
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
          </BigSection>
        ) : null
      )
    );
  return <RenderItems />;
}

const BigFont = styled.p`
  font-size: 5rem;
  padding-right: 4rem;
`;

const BigSection = styled.div`
  height: 100vh;
  text-align: center;
`;

const Header = styled.div`
  font-size: 5rem;
`;

const Section = styled.div`
  margin: 0;
<<<<<<< HEAD
  height: 600px;
=======
  height: 500px;
>>>>>>> 2f0354a8ca6bb44613e170586f1e9c059fb26c56
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
  width: 100%;
  text-align: left;
  font-size: 3em;
  font-weight: bold;
  width: 100%;
  color: #087f8c;
  overflow-wrap: break-word;

`;

const Option = styled.div`
  margin: 1rem;
  border: 3px solid #e39774;
  border-radius: 25px;
  box-shadow: 3px 5px 4px #e39774;
`;

export default Questionnarie;
