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
import SignUp from '../SignUp/SignUp.jsx';

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

  const handleClick = (value) => setSurvey((oldSurvey) => [...oldSurvey, value]);

  const RenderItems = () =>
    step === 5 ? (
      <SignUp />
      //route to sign up
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
  console.log(survey);
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

export default Questionnarie;
