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
import { HealthContext } from '../../context/healthContext.jsx';

const TransitionPage = () => (
  <>
    <div className="container section has-background-success is-size-2 has-text-weight-bold">
      Welcome to Healthy Food!
    </div>
    <div className="section is-medium columns">
      <div className="container column">
        <p>Save up to $1000 a year!</p>
        <p>Try us risk free for 30 days and start saving</p>
      </div>
      <div className="container column">
        <Option className="box columns section has-background-warning">
          <h1 className="column">Hello</h1>
          <Link to="/recipe-generator">
            <button type="button" className="column">
              Hello
            </button>
          </Link>
        </Option>
        <Option className="box columns section">
          <h1 className="column">Goodbye</h1>
          <Link to="/signup">
            <button type="button" className="column">
              Goodbye
            </button>
          </Link>
        </Option>
        <div>
          <h1>Membership benefits</h1>
          <p>Guaranteed savings on 6000 + healthy essentials</p>
          <p>Fast, free, carbon-neutral shipping</p>
          <p>Get meals from local farmers</p>
        </div>
      </div>
    </div>
  </>
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
          <section className="section">
            <progress className="progress is-danger" value={step} max={4} />
            <Container className="container card">
              <Section className="columns section is-medium" key={i}>
                <Div className="section column" />
                <Div className="section column columns is-multiline">
                  <Title className="title is-1">{option.title}</Title>
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
          </section>
        ) : null
      )
    );
  return <RenderItems />;
}

const Section = styled.div`
  margin: 0;
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
  text-align: left;
  font-size: 3em;
  font-weight: bold;
  color: #087f8c;
  overflow-wrap: break-word;
`;

const Option = styled.div`
  margin: 1rem;
  border: 3px solid #095256;
  border-radius: 25px;
  box-shadow: 1px 2px 3px;
`;

export default Questionnarie;
